import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/server";

const scanEventSchema = z.object({
  business_id: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  routed_to: z.enum(["google", "private"]),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = scanEventSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: "Données d'événement invalides", details: result.error.format() },
        { status: 400 }
      );
    }

    const { business_id, rating, routed_to } = result.data;

    try {
      const supabase = createAdminClient();
      await supabase.from("scan_events").insert({
        business_id,
        rating,
        routed_to,
      });
    } catch (dbErr) {
      // Tolérance aux pannes : en dev/test si la DB n'est pas connectée, on logge sans crasher
      console.warn("Échec d'enregistrement scan_events en base:", dbErr);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur interne" }, { status: 500 });
  }
}
