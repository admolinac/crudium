import type { CreateProduct, Product, UpdateProduct } from "../../types/productsType";
import type { Result } from "../../types/resultType";
import type { ProductApiDataSource } from "../datasource/productApiDatasource";
import type { ProductRepository } from "./productRepository";

// 🧩 Esta clase IMPLEMENTA el contrato ProductRepository

export class ProductRepositoryImpl implements ProductRepository {

    private readonly dataSource: ProductApiDataSource;

    constructor(dataSource: ProductApiDataSource) {
        this.dataSource = dataSource;
    }

    async getProducts(): Promise<Result<Product[]>> {
        return this.dataSource.getProducts();
    }

    async getProduct(id: string): Promise<Result<Product>> {
        return this.dataSource.getProduct(id);
    }

    async createProduct(input: CreateProduct): Promise<Result<Product>> {
        return this.dataSource.createProduct(input);
    }

    async updateProduct(id: string, input: UpdateProduct): Promise<Result<Product>> {
        return this.dataSource.updateProduct(id, input);
    }

    async deleteProduct(id: string): Promise<Result<null>> {
        return this.dataSource.deleteProduct(id);
    }
}
