import { z } from "zod";

// 🧩 Definición del esquema de validación para campos de modal y configuración de modal

export const ModalFieldSchema = z.object({
	label: z.string(),
	id: z.string(),
	type: z.enum(["text", "number", "email", "select", "checkbox"]),
	name: z.string(),
	options: z
		.array(
			z.object({
				value: z.string(),
				label: z.string(),
			})
		)
		.optional(),
	required: z.boolean().default(false),
	step: z.string().optional(),
	min: z.string().optional(),
	max: z.string().optional()
});

export const ModalConfigSchema = z.object({
	id: z.string(),
	title: z.string(),
	formId: z.string(),
	fields: z.array(ModalFieldSchema),
	submit: z.string()
});

export type ModalField = z.infer<typeof ModalFieldSchema>;
export type ModalConfig = z.infer<typeof ModalConfigSchema>;
