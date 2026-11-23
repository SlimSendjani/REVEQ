import { NextResponse } from "next/server";
import { z } from "zod";
import { generateCustomerResponse, type ResponseTone } from "@/lib/ai-responder";

const requestSchema = z.object({
  message: z.string().min(1, "Message requis"),
  customer_name: z.string().optional().nullable(),
  business_name: z.string().default("Notre établissement"),
  rating: z.number().int().min(1).max(5).default(2),
  tone: z.enum(["chaleureux", "professionnel", "rabais", "explicatif"]).default("chaleureux"),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const result = requestSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: "Paramètres invalides", details: result.error.format() },
        { status: 400 }
      );
    }

    const { message, customer_name, business_name, rating, tone } = result.data;

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
