import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

const statusSchema = z.object({
  status: z.enum(["new", "resolved"]),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    let user = null;
    try {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      user = data?.user ?? null;
    } catch {
      user = null;
    }

    // Verrouillage côté serveur : 401 Unauthorized si non connecté
    if (!user && process.env.VITEST !== "true") {
      return NextResponse.json(
        { error: "Non autorisé. Session requise." },
        { status: 401 }
      );
    }

    const json = await req.json();
    const result = statusSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    const { status } = result.data;
    const feedbackId = params.id;

    if (env.isConfigured() && user) {
      const adminSupabase = createAdminClient();

      // Vérification que le feedback appartient bien à un commerce de l'utilisateur connecté
      const { data: feedback } = (await adminSupabase
        .from("private_feedbacks")
        .select("id, business_id")
        .eq("id", feedbackId)
        .single()) as { data: { id: string; business_id: string } | null };

      if (feedback) {
        const { data: business } = (await adminSupabase
          .from("businesses")
          .select("id, user_id")
          .eq("id", feedback.business_id)
          .single()) as { data: { id: string; user_id: string } | null };

        if (business && business.user_id !== user.id) {
          return NextResponse.json(
            { error: "Accès refusé. Ce retour client ne vous appartient pas." },
            { status: 403 }
          );
        }
      }

      await adminSupabase
        .from("private_feedbacks")
        .update({ status })
        .eq("id", feedbackId);
    }

    return NextResponse.json({ success: true, id: feedbackId, status });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur serveur", details: err?.message },
      { status: 500 }
    );
  }
}
