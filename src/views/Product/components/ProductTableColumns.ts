import { ActionButtons } from "../../../components/ActionButtons";
import type { Product } from "../../../types/productsType";

export function getProductTableColumns() {

    return [
        { title: "Nombre", data: "name" },
        {
            title: "Precio",
            data: null,
            render: (product: Product) => {
                return new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(product.price);
            }
        },
        {
            title: "En Stock",
            data: null,
            render: (product: Product) => {
                return product.inStock ? "🟢 Sí" : "🔴 No";
            }
        },
        {
            title: "Categoría",
            data: null,
            render: (product: Product) => {
                switch (product.category) {
                    case "electronics":
                        return "⚡Electrónica";
                    case "books":
                        return "📚Libros";
                    case "toys":
                        return "🧸Juguetes";
                    default:
                        return product.category;
                }
            }
        },
        {
            title: "Acciones",
            data: null,
            render: (product: Product) => ActionButtons(product),
        },
    ];
}
