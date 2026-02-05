import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { validateSaveTemplateInput } from "@/lib/validation";

// GET /api/templates - list user's saved templates (metadata only)
export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const templates = await prisma.savedTemplate.findMany({
    where: { userId: session.user.id },
    select: {
      id: true,
      name: true,
      description: true,
      baseTemplateId: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(templates);
}

// POST /api/templates - create a new saved template
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const result = validateSaveTemplateInput(body);
  if ("errors" in result) {
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const template = await prisma.savedTemplate.create({
    data: {
      userId: session.user.id,
      name: result.data.name,
      content: result.data.content,
      description: result.data.description,
      baseTemplateId: result.data.baseTemplateId,
    },
    select: {
      id: true,
      name: true,
      description: true,
      baseTemplateId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(template, { status: 201 });
}
