import DataTable from "datatables.net-dt";
import type { Api } from "datatables.net";
import "datatables.net-responsive-dt";
import { createRepositories } from "../../../api/factory/createRepositories";
import { getGenericConfig } from "../../../utils/getTableConfig";
import { getUserTableColumns } from "./UserTableColumns";

let datatable: Api | undefined;

const { userRepository } = createRepositories();

export async function renderUserTable() {
    const tableElement = document.querySelector("#user-table");
    if (!tableElement) {
        console.warn("No se encontró #user-table en el DOM");
        return;
    }

    const result = await userRepository.getUsers();
    if (!result.success) {
        console.error(result.error);
        return;
    }

    if (datatable) datatable.destroy();

    const datatableConfig = {
        data: result.data,
        columns: getUserTableColumns(),
        ... getGenericConfig()
    }

    datatable = new DataTable("#user-table", datatableConfig);
}

