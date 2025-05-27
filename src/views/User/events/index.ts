import { Modal } from "bootstrap";
import { handleAddButtonClick, processUserAction, handleEditForm } from "./onClick";

export async function setUserTableEvents() {
    const tableElement = document.getElementById("user-table") as HTMLTableElement;

    if (!tableElement) {
        console.warn("No se encontró elemento en el DOM");
        return;
    }

    tableElement.addEventListener("click", processUserAction);
}

export function setUserAddModalEvents(addModalInstance: Modal) {
    const addBtnElement = document.getElementById("add-btn") as HTMLElement || null;
    const addFormElement = document.getElementById("createUserForm") as HTMLFormElement || null;

    if (!addBtnElement || !addFormElement) {
        console.warn("No se encontró elemento en el DOM");
        return;
    }


    addBtnElement.addEventListener("click", () => addModalInstance.show());

    addFormElement.addEventListener("submit", async (e: SubmitEvent) => {
        handleAddButtonClick(e, addFormElement, addModalInstance);
    })
}

export function setUserEditModalEvents(editModalInstance: Modal): void {
    const editForm = document.getElementById("editUserForm") as HTMLFormElement | null;
    if (!editForm) return;

    editForm.addEventListener("submit", async (e: SubmitEvent) => {
        e.preventDefault();
        const id = editForm.dataset.userId;
        if (!id) {
            alert("Error: ID de usuario no encontrado.");
            return;
        }

        await handleEditForm(e, id, editForm, editModalInstance);
    });
}