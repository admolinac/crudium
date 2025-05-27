import { type CreateUser, type UpdateUser, type User, } from "../../types/userType";
import { type Result } from "../../types/resultType";

// 🧩 Esta interfaz define el alcance del repositorio de usuarios.

export interface UserRepository {
    getUsers(): Promise<Result<User[]>>;
    getUser(id: string): Promise<Result<User>>;
    createUser(input: CreateUser): Promise<Result<User>>;
    updateUser(id: string, input: UpdateUser): Promise<Result<User>>;
    deleteUser(id: string): Promise<Result<null>>;
}
