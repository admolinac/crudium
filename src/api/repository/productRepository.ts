import { type CreateProduct, type Product, type UpdateProduct } from '../../types/productsType';
import { type Result } from "../../types/resultType";

// 🧩 Esta interfaz define el alcance del repositorio de productos.

export interface ProductRepository {

	getProducts(): Promise<Result<Product[]>>;
	getProduct(id: string): Promise<Result<Product>>;
	createProduct(input: CreateProduct): Promise<Result<Product>>;
	updateProduct(id: string, input: UpdateProduct): Promise<Result<Product>>;
	deleteProduct(id: string): Promise<Result<null>>;
}
