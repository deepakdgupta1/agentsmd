import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";
import { validateSaveTemplateInput } from "@/lib/validation";

interface RouteContext {
  params: Promise<{ id: string }>;
}

// GET /api/templates/[id] - fetch a single saved template
export async function GET(_request: Request, context: RouteContext) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  const template = await prisma.savedTemplate.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!template) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(template);
}

// PUT /api/templates/[id] - update a saved template
export async function PUT(request: Request, context: RouteContext) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

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

  // Atomic ownership check + update via compound where clause
  const { count } = await prisma.savedTemplate.updateMany({
    where: { id, userId: session.user.id },
    data: {
      name: result.data.name,
      content: result.data.content,
      description: result.data.description ?? null,
    },
  });

  if (count === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const updated = await prisma.savedTemplate.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      baseTemplateId: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(updated);
}

// DELETE /api/templates/[id] - delete a saved template
export async function DELETE(_request: Request, context: RouteContext) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;

  // Atomic ownership check + delete via compound where clause
  const { count } = await prisma.savedTemplate.deleteMany({
    where: { id, userId: session.user.id },
  });

  if (count === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return new NextResponse(null, { status: 204 });
}
