import { type CreateUser, type UpdateUser, type User, userSchema, validateCreateUser, validateUpdateUser } from "../../types/userType";
import { type Result } from "../../types/resultType";

const API_URL = "https://6823f16c65ba058033985469.mockapi.io/api/v1/users";

// 🧩 Esta clase es la responsable de hacer las peticiones a la Mock API de Usuarios.

export class UserApiDataSource {

    async getUser(id: string): Promise<Result<User>> {
        try {
            const res = await fetch(`${API_URL}/${id}`);
            if (!res.ok) throw new Error("Error al obtener el usuario con id: " + id);
            const data = await res.json();
            return { success: true, data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async getUsers(): Promise<Result<User[]>> {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error("Error al obtener los usuarios");
            const data = await res.json();
            return { success: true, data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async createUser(input: CreateUser): Promise<Result<User>> {
        try {
            const isValid = validateCreateUser(input);
            if (!isValid.success) throw new Error("Datos no válidos para crear usuario");

            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });

            const data = await res.json();
            const result = userSchema.safeParse(data);
            if (!result.success) throw new Error("Respuesta inválida del servidor");

            return { success: true, data: result.data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async updateUser(id: string, input: UpdateUser): Promise<Result<User>> {
        try {
            const isValid = validateUpdateUser(input);
            if (!isValid.success) throw new Error("Datos no válidos para editar usuario");

            const res = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
            });

            const data = await res.json();
            const result = userSchema.safeParse(data);
            if (!result.success) throw new Error("Respuesta inválida del servidor");

            return { success: true, data: result.data };

        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }

    async deleteUser(id: string): Promise<Result<null>> {
        try {
            const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("No se pudo eliminar el usuario");
            return { success: true, data: null };
            
        } catch (error) {
            return { success: false, error: (error as Error).message };
        }
    }
}
