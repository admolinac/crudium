import DataTable from "datatables.net-dt";
import type { Api } from "datatables.net";
import "datatables.net-responsive-dt";
import { createRepositories } from "../../../api/factory/createRepositories";
import { getGenericConfig } from "../../../utils/getTableConfig";
import { getProductTableColumns } from "./ProductTableColumns";

let datatable: Api | undefined;

const { productRepository } = createRepositories();

export async function renderProductTable() {
    const tableElement = document.querySelector("#product-table");
    if (!tableElement) {
        console.warn("No se encontró #product-table en el DOM");
        return;
    }

    const result = await productRepository.getProducts();
    if (!result.success) {
        console.error(result.error);
        return;
    }

    if (datatable) datatable.destroy();

    const datatableConfig = {
        data: result.data,
        columns: getProductTableColumns(),
        ... getGenericConfig()
    }

    datatable = new DataTable("#product-table", datatableConfig);
}

