import { type UserRepository } from "./userRepository"
import { UserApiDataSource } from "../datasource/userApiDatasource"
import { type CreateUser, type UpdateUser, type User } from "../../types/userType"
import { type Result } from "../../types/resultType"

// 🧩 Esta clase IMPLEMENTA el contrato UserRepository

export class UserRepositoryImpl implements UserRepository {

    private readonly dataSource: UserApiDataSource

    constructor(dataSource: UserApiDataSource) {
        this.dataSource = dataSource;
    }

    async getUsers(): Promise<Result<User[]>> {
        return this.dataSource.getUsers()
    }

    async getUser(id: string): Promise<Result<User>> {
        return this.dataSource.getUser(id)
    }

    async createUser(input: CreateUser): Promise<Result<User>> {
        return this.dataSource.createUser(input)
    }

    async updateUser(id: string, input: UpdateUser): Promise<Result<User>> {
        return this.dataSource.updateUser(id, input)
    }

    async deleteUser(id: string): Promise<Result<null>> {
        return this.dataSource.deleteUser(id)
    }
}