import { z } from "zod";
import { type Result } from "./resultType";

// 🧩 Definición del esquema de validación para productos

export const productSchema = z.object({
    id: z.string(),
    name: z
        .string({ required_error: "El nombre es obligatorio" })
        .min(1, { message: "El nombre debe tener al menos 1 letra" }),
    price: z
        .number({ invalid_type_error: "El precio debe ser un número" })
        .positive("Debe ser mayor que 0"),
    inStock: z.boolean({ message: "Debe ser booleano" }),
    category: z.enum(["toys", "books", "electronics"], {
        errorMap: () => ({ message: "Categoría inválida" }),
    }),
});

const createProductSchema = productSchema.omit({ id: true });
const updateProductSchema = productSchema.partial();

export type Product = z.infer<typeof productSchema>;
export type CreateProduct = z.infer<typeof createProductSchema>;
export type UpdateProduct = z.infer<typeof updateProductSchema>;

// Funciones de validación

export function validateCreateProduct(input: unknown): Result<CreateProduct> {
    const result = createProductSchema.safeParse(input);
    if (!result.success) {
        return { success: false, error: result.error.message };
    }
    return { success: true, data: result.data };
}

export function validateUpdateProduct(input: unknown): Result<UpdateProduct> {
    const result = updateProductSchema.safeParse(input);
    if (!result.success) {
        return { success: false, error: result.error.message };
    }
    return { success: true, data: result.data };
}
