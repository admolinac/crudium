import { type CreateProduct, type Product, productSchema, type UpdateProduct, validateCreateProduct, validateUpdateProduct } from "../../types/productsType";
import { type Result } from "../../types/resultType";

const API_URL = "https://6823f16c65ba058033985469.mockapi.io/api/v1/products";

// 🧩 Esta clase es la responsable de hacer las peticiones a la Mock API de Productos.

export class ProductApiDataSource {

    async createProduct(input: CreateProduct): Promise<Result<Product>> {
        try {
            const isValid = validateCreateProduct(input);
            if (!isValid.success) throw new Error("Datos no válidos para crear producto");

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });

            const data = await res.json();
            const result = productSchema.safeParse(data);
            if (!result.success) throw new Error("Respuesta inválida del servidor");

            return { success: true, data: result.data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async getProducts(): Promise<Result<Product[]>> {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Error al obtener los productos");
            const data = await res.json();
            return { success: true, data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async getProduct(id: string): Promise<Result<Product>> {
        try {
            const res = await fetch(`${API_URL}/${id}`);
            if (!res.ok) throw new Error("Producto no encontrado");
            const data = await res.json();
            return { success: true, data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async updateProduct(id: string, updates: UpdateProduct): Promise<Result<Product>> {
        try {
            const isValid = validateUpdateProduct(updates);
            if (!isValid.success) throw new Error("Datos no válidos para editar producto");
            
            const res = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updates),
            });

            const data = await res.json();
            const result = productSchema.safeParse(data);
            if (!result.success) throw new Error("Respuesta inválida del servidor");

            return { success: true, data: result.data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async deleteProduct(id: string): Promise<Result<null>> {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("No se pudo eliminar el producto");
            return { success: true, data: null };
            
        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }
}
