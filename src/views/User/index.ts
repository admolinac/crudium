import UserTemplate from "./components/UserTemplate";
import type { PageComponent } from "../../types/pageComponentType";
import { renderUserTable } from "./components/UserTable";
import { setUserAddModalEvents, setUserEditModalEvents, setUserTableEvents } from "./events";
import { getModal } from "../../utils/modalManager";

const User: PageComponent = {
    render: () =>{ 
        return UserTemplate()},
    postRender: async () => {
        await renderUserTable();

    },
    bindEvents: () => {
        setUserTableEvents();
        const addModal = getModal("addUserModal");
        const editModal = getModal("editUserModal");
        
        if (addModal) setUserAddModalEvents(addModal);
        if (editModal) setUserEditModalEvents(editModal);
    }
};

export default User;