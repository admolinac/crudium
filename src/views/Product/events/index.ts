import type { Modal } from "bootstrap";
import { handleAddButtonClick, handleEditForm, processProductAction } from "./onClick";

export async function setProductTableEvents() {
    const tableElement = document.getElementById("product-table") as HTMLTableElement;

    if (!tableElement) {
        console.warn("No se encontró elemento en el DOM");
        return;
    }

    tableElement.addEventListener("click", processProductAction);
}

export function setProductAddModalEvents(addModalInstance: Modal) {
    const addBtnElement = document.getElementById("add-btn") as HTMLElement || null;
    const addFormElement = document.getElementById("createProductForm") as HTMLFormElement || null;

    if (!addBtnElement || !addFormElement) {
        console.warn("No se encontró elemento en el DOM");
        return;
    }

    addBtnElement.addEventListener("click", () => addModalInstance.show());

    addFormElement.addEventListener("submit", async (e: SubmitEvent) => {
        handleAddButtonClick(e, addFormElement, addModalInstance);
    })
};

export function setProductEditModalEvents(editModalInstance: Modal): void {
    const editForm = document.getElementById("editProductForm") as HTMLFormElement | null;
    if (!editForm) return;

    editForm.addEventListener("submit", async (e: SubmitEvent) => {
        e.preventDefault();
        const id = editForm.dataset.productId;
        if (!id) {
            alert("Error: ID de producto no encontrado.");
            return;
        }

        await handleEditForm(e, id, editForm, editModalInstance);
    });
};