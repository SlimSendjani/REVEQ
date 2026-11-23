import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

const statusSchema = z.object({
  status: z.enum(["new", "resolved"]),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const json = await req.json();
    const result = statusSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json({ error: "Statut invalide" }, { status: 400 });
    }

    const { status } = result.data;
    const feedbackId = params.id;

    if (env.isConfigured()) {
      try {
        const supabase = createAdminClient();
        await supabase
          .from("private_feedbacks")
          .update({ status })
          .eq("id", feedbackId);
      } catch (dbErr) {
        console.warn("Erreur mise à jour statut feedback Supabase:", dbErr);
      }
    }

    return NextResponse.json({ success: true, id: feedbackId, status });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur serveur", details: err?.message },
      { status: 500 }
    );
  }
}
