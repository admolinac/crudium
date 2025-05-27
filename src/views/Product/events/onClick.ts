import type { Modal } from "bootstrap";
import { createRepositories } from "../../../api/factory/createRepositories";
import { getModal } from "../../../utils/modalManager";
import { renderProductTable } from "../components/ProductTable";
import type { CreateProduct, Product, UpdateProduct } from "../../../types/productsType";

const { productRepository } = createRepositories();

export const handleAddButtonClick = async (e: SubmitEvent, formElement: HTMLFormElement, modalElement: Modal) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const input = {
        name: formData.get("name"),
        price: Number(formData.get("price")),
        inStock: Boolean(formData.has("inStock")),
        category: formData.get("category")
    } as CreateProduct;

    const result = await productRepository.createProduct(input);

    if (result.success) {
        alert("Producto creado ✅");
        modalElement.hide();
        formElement.reset();
        renderProductTable();
    } else {
        alert("❌" + result.error);
    }
}

const handleDeleteButtonClick = async (target: HTMLElement): Promise<void> => {
    const deleteButton = target.closest(".delete-btn") as HTMLElement | null;

    if (deleteButton) {
        const id = deleteButton.dataset.id;
        if (!id) return;

        const productResult = await productRepository.getProduct(id);
        if (!productResult.success) {
            console.error("Error al obtener datos del usuario: ", productResult.error);
            return;
        }

        const confirmed = confirm(`¿Desea eliminar al usuario con ID ${id}: ${productResult.data.name}?`);
        if (!confirmed) return;

        const deleteResult = await productRepository.deleteProduct(id);
        if (deleteResult.success) {
            alert("Producto eliminado ✅");
            renderProductTable();
        } else {
            alert(deleteResult.error);
        }
    }
}

const renderEditInfo = (editForm: HTMLFormElement, product: Product) => {
    const nameInput = editForm.elements.namedItem("name") as HTMLInputElement;
    const priceInput = editForm.elements.namedItem("price") as HTMLInputElement;
    const inStockInput = editForm.elements.namedItem("inStock") as HTMLInputElement;
    const categoryInput = editForm.elements.namedItem("category") as HTMLSelectElement;

    nameInput.value = product.name;
    priceInput.value = String(product.price);
    inStockInput.checked = product.inStock;
    categoryInput.value = product.category;
}

export const handleEditForm = async (e: SubmitEvent, id: string, formElement: HTMLFormElement, modalElement: Modal) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const input = {
        name: formData.get("name"),
        price: Number(formData.get("price")),
        inStock: Boolean(formData.has("inStock")),
        category: formData.get("category")
    } as UpdateProduct;

    const result = await productRepository.updateProduct(id, input);

    if (result.success) {
        alert("Producto actualizado ✅");
        modalElement.hide();
        formElement.reset();
        renderProductTable();
    } else {
        alert("❌" + result.error);
    }
}


const handleEditButtonClick = async (target: HTMLElement): Promise<void> => {
    const editButton = target.closest(".edit-btn") as HTMLElement || null;
    const editForm = document.getElementById("editProductForm") as HTMLFormElement || null;
    const editModal = getModal("editProductModal") || null;


    if (editButton && editModal && editForm) {
        const id = editButton.dataset.id;
        if (!id) return;

        const productResult = await productRepository.getProduct(id);
        if (!productResult.success) {
            console.error("Error al obtener datos del producto: ", productResult.error);
            return;
        }

        editForm.dataset.productId = id;
        renderEditInfo(editForm, productResult.data);
        editModal.show();
    }
}

export async function processProductAction(e: MouseEvent): Promise<void> {
    const target = e.target as HTMLElement;

    await handleDeleteButtonClick(target);
    await handleEditButtonClick(target);
}

