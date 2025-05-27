import type { Modal } from "bootstrap";
import { createRepositories } from "../../../api/factory/createRepositories";
import type { CreateUser, UpdateUser, User } from "../../../types/userType";
import { renderUserTable } from "../components/UserTable";
import { getModal } from "../../../utils/modalManager";

const { userRepository } = createRepositories();

export const handleAddButtonClick = async (e: SubmitEvent, formElement: HTMLFormElement, modalElement: Modal) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const input = {
        name: formData.get("name"),
        age: Number(formData.get("age")),
        email: formData.get("email"),
        status: formData.get("status")
    } as CreateUser;

    const result = await userRepository.createUser(input);

    if (result.success) {
        alert("Usuario creado ✅");
        modalElement.hide();
        formElement.reset();
        renderUserTable();
    } else {
        alert("❌" + result.error);
    }
}

const handleDeleteButtonClick = async (target: HTMLElement): Promise<void> => {
    const deleteButton = target.closest(".delete-btn") as HTMLElement | null;

    if (deleteButton) {
        const id = deleteButton.dataset.id;
        if (!id) return;

        const userResult = await userRepository.getUser(id);
        if (!userResult.success) {
            console.error("Error al obtener datos del usuario: ", userResult.error);
            return;
        }

        const confirmed = confirm(`¿Desea eliminar al usuario con ID ${id}: ${userResult.data.name}?`);
        if (!confirmed) return;

        const deleteResult = await userRepository.deleteUser(id);
        if (deleteResult.success) {
            alert("Usuario eliminado ✅");
            renderUserTable();
        } else {
            alert(deleteResult.error);
        }
    }
}

const renderEditInfo = (editForm: HTMLFormElement, user: User) => {
    const nameInput = editForm.elements.namedItem("name") as HTMLInputElement;
    const ageInput = editForm.elements.namedItem("age") as HTMLInputElement;
    const emailInput = editForm.elements.namedItem("email") as HTMLInputElement;
    const statusInput = editForm.elements.namedItem("status") as HTMLSelectElement;

    nameInput.value = user.name;
    ageInput.value = String(user.age);
    emailInput.value = user.email;
    statusInput.value = user.status;
}

export const handleEditForm = async (e: SubmitEvent, id: string, formElement: HTMLFormElement, modalElement: Modal) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const input = {
        name: formData.get("name"),
        age: Number(formData.get("age")),
        email: formData.get("email"),
        status: formData.get("status")
    } as UpdateUser;

    const result = await userRepository.updateUser(id, input);

    if (result.success) {
        alert("Usuario actualizado ✅");
        modalElement.hide();
        formElement.reset();
        renderUserTable();
    } else {
        alert("❌" + result.error);
    }
}


const handleEditButtonClick = async (target: HTMLElement): Promise<void> => {
    const editButton = target.closest(".edit-btn") as HTMLElement || null;
    const editForm = document.getElementById("editUserForm") as HTMLFormElement || null;
    const editModal = getModal("editUserModal") || null;


    if (editButton && editModal && editForm) {
        const id = editButton.dataset.id;
        if (!id) return;

        const userResult = await userRepository.getUser(id);
        if (!userResult.success) {
            console.error("Error al obtener datos del usuario: ", userResult.error);
            return;
        }

        editForm.dataset.userId = id;
        renderEditInfo(editForm, userResult.data);
        editModal.show();
    }
}

export async function processUserAction(e: MouseEvent): Promise<void> {
    const target = e.target as HTMLElement;

    await handleDeleteButtonClick(target);
    await handleEditButtonClick(target);
}

