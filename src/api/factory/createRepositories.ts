// /factories/createRepositories.ts
import { UserApiDataSource } from "../datasource/userApiDatasource";
import { ProductRepositoryImpl } from "../repository/productRepositoryImpl";
import { UserRepositoryImpl } from "../repository/userRepositoryImpl";
import { ProductApiDataSource } from '../datasource/productApiDatasource';

// 🔧 Fábrica que crea todos los repositorios: Usuarios y Productos.

export function createRepositories() {

    const userRepository = new UserRepositoryImpl(new UserApiDataSource());
    const productRepository = new ProductRepositoryImpl(new ProductApiDataSource());

    return {
        userRepository,
        productRepository
    }
}