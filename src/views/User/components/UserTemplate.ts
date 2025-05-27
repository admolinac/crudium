import { Modal } from "bootstrap";
import Table from "../../../components/Table";
import FormModal from "../../../components/FormModal";
import SectionHeading from "../../../components/SectionHeading";
import { insertModal } from "../../../utils/insertModal";
import { registerModal } from "../../../utils/modalManager";

const UserTemplate = (): HTMLElement => {
    const container = document.createElement("div");

    const addModalId = "addUserModal";
    const editModalId = "editUserModal";

    const header = SectionHeading("Usuarios", "bi bi-person-fill", "Crear Usuario", addModalId);
    const table = Table("user-table");

    const addUserModal = FormModal({
        id: addModalId,
        title: "Crear Usuario",
        formId: "createUserForm",
        submit: "Crear",
        fields: [
            { label: "Nombre", id: "name", name: "name", type: "text", required: true },
            { label: "Edad", id: "age", name: "age", type: "number", required: true },
            { label: "Email", id: "email", name: "email", type: "email", required: true },
            {
                label: "Estado", id: "status", name: "status", type: "select", required: true, options: [
                    { value: "active", label: "🟢Activo" },
                    { value: "inactive", label: "🔴Inactivo" }
                ]
            }
        ]
    });

    const editUserModal = FormModal({
        id: editModalId,
        title: "Editar Usuario",
        formId: "editUserForm",
        submit: "Editar",
        fields: [
            { label: "Nombre", id: "name", name: "name", type: "text", required: false },
            { label: "Edad", id: "age", name: "age", type: "number", required: false },
            { label: "Email", id: "email", name: "email", type: "email", required: false },
            {
                label: "Estado", id: "status", name: "status", type: "select", required: false, options: [
                    { value: "active", label: "🟢Activo" },
                    { value: "inactive", label: "🔴Inactivo" }
                ]
            }
        ]
    });

    insertModal(addUserModal);
    insertModal(editUserModal);

    const addModalElement = document.getElementById(addModalId) as HTMLElement;
    const editModalElement = document.getElementById(editModalId) as HTMLElement;

    const addModalInstance = new Modal(addModalElement);
    const editModalInstance = new Modal(editModalElement);

    registerModal(addModalId, addModalInstance);
    registerModal(editModalId, editModalInstance);

    container.append(header, table);

    return container;
}

export default UserTemplate;