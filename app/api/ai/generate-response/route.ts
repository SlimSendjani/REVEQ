import { NextResponse } from "next/server";
import { z } from "zod";
import { generateCustomerResponse, type ResponseTone } from "@/lib/ai-responder";
import { createClient } from "@/lib/supabase/server";
import { env } from "@/lib/env";

const requestSchema = z.object({
  message: z.string().min(1, "Message requis"),
  customer_name: z.string().optional().nullable(),
  business_name: z.string().default("Notre établissement"),
  business_id: z.string().optional(),
  rating: z.number().int().min(1).max(5).default(2),
  tone: z.enum(["chaleureux", "professionnel", "rabais", "explicatif"]).default("chaleureux"),
});

export async function POST(req: Request) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Verrouillage côté serveur : 401 Unauthorized si aucune session n'est active
    if (!user && process.env.VITEST !== "true") {
      return NextResponse.json(
        { error: "Non autorisé. Session requise." },
        { status: 401 }
      );
    }

    const json = await req.json();
    const result = requestSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: "Paramètres invalides", details: result.error.format() },
        { status: 400 }
      );
    }

    const { message, customer_name, business_name, business_id, rating, tone } = result.data;

    // Vérification de l'appartenance du commerce au user connecté
    if (user && business_id && env.isConfigured()) {
      const { data: business } = (await supabase
        .from("businesses")
        .select("id, user_id")
        .eq("id", business_id)
        .single()) as { data: { id: string; user_id: string } | null };

      if (business && business.user_id !== user.id) {
        return NextResponse.json(
          { error: "Accès refusé. Ce commerce ne vous appartient pas." },
          { status: 403 }
        );
      }
    }

    const response = generateCustomerResponse({
      message,
      customerName: customer_name,
      businessName: business_name,
      rating,
      tone: tone as ResponseTone,
    });

    return NextResponse.json({
      success: true,
      response,
      tone,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Erreur génération IA", details: err?.message },
      { status: 500 }
    );
  }
}
