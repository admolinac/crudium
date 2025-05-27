import { Modal } from "bootstrap";
import FormModal from "../../../components/FormModal";
import { insertModal } from "../../../utils/insertModal";
import SectionHeading from "../../../components/SectionHeading";
import Table from "../../../components/Table";
import { registerModal } from "../../../utils/modalManager";

const ProductTemplate = (): HTMLElement => {
    const container = document.createElement("div");

    const addModalId = "addProductModal";
    const editModalId = "editProductModal";

    const header = SectionHeading("Productos", "bi bi-box-seam-fill", "Crear Producto", "addProductModal");
    const table = Table("product-table");

    const addProductModal = FormModal({
        id: addModalId,
        title: "Crear Producto",
        formId: "createProductForm",
        submit: "Crear",
        fields: [
            { label: "Nombre", id: "name", name: "name", type: "text", required: true },
            { label: "Precio", id: "price", name: "price", type: "number", required: true, step: "0.01", min: "0" },
            { label: "En Stock", id: "inStock", name: "inStock", type: "checkbox", required: false  },
            {
                label: "Categoría", id: "category", name: "category", type: "select", required: true, options: [
                    { value: "toys", label: "🧸 Juguetes" },
                    { value: "books", label: "📚 Libros" },
                    { value: "electronics", label: "⚡ Electrónica" }
                ]
            }
        ]
    });

    const editProductModal = FormModal({
        id: editModalId,
        title: "Editar Producto",
        formId: "editProductForm",
        submit: "Editar",
        fields: [
            { label: "Nombre", id: "name", name: "name", type: "text", required: false },
            { label: "Precio", id: "price", name: "price", type: "number", required: false, step: "0.01", min: "0" },
            { label: "En Stock", id: "inStock", name: "inStock", type: "checkbox", required: false },
            {
                label: "Categoría", id: "category", name: "category", type: "select", required: false, options: [
                    { value: "toys", label: "🧸 Juguetes" },
                    { value: "books", label: "📚 Libros" },
                    { value: "electronics", label: "⚡ Electrónica" }
                ]
            }
        ]
    });

    insertModal(addProductModal);
    insertModal(editProductModal);

    const addModalElement = document.getElementById(addModalId) as HTMLElement;
    const editModalElement = document.getElementById(editModalId) as HTMLElement;

    const addModalInstance = new Modal(addModalElement);
    const editModalInstance = new Modal(editModalElement);

    registerModal(addModalId, addModalInstance);
    registerModal(editModalId, editModalInstance);

    container.append(header, table);

    return container;
}

export default ProductTemplate;