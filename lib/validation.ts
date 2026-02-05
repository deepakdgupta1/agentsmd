export interface SaveTemplateInput {
  name: string;
  content: string;
  description?: string;
  baseTemplateId?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateSaveTemplateInput(
  body: unknown
): { data: SaveTemplateInput } | { errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (!body || typeof body !== "object") {
    return { errors: [{ field: "body", message: "Request body is required" }] };
  }

  const { name, content, description, baseTemplateId } = body as Record<
    string,
    unknown
  >;

  // name: required, string, max 100 chars
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.push({ field: "name", message: "Name is required" });
  } else if (name.trim().length > 100) {
    errors.push({
      field: "name",
      message: "Name must be 100 characters or less",
    });
  }

  // content: required, string, max 50000 chars
  if (!content || typeof content !== "string" || content.trim().length === 0) {
    errors.push({ field: "content", message: "Content is required" });
  } else if (content.length > 50000) {
    errors.push({
      field: "content",
      message: "Content must be 50,000 characters or less",
    });
  }

  // description: optional, string, max 500 chars
  if (description !== undefined && description !== null) {
    if (typeof description !== "string") {
      errors.push({
        field: "description",
        message: "Description must be a string",
      });
    } else if (description.length > 500) {
      errors.push({
        field: "description",
        message: "Description must be 500 characters or less",
      });
    }
  }

  // baseTemplateId: optional, string, max 100 chars
  if (baseTemplateId !== undefined && baseTemplateId !== null) {
    if (typeof baseTemplateId !== "string") {
      errors.push({
        field: "baseTemplateId",
        message: "Base template ID must be a string",
      });
    } else if (baseTemplateId.length > 100) {
      errors.push({
        field: "baseTemplateId",
        message: "Base template ID must be 100 characters or less",
      });
    }
  }

  if (errors.length > 0) {
    return { errors };
  }

  return {
    data: {
      name: (name as string).trim(),
      content: content as string,
      description:
        typeof description === "string" ? description.trim() || undefined : undefined,
      baseTemplateId:
        typeof baseTemplateId === "string" ? baseTemplateId : undefined,
    },
  };
}
