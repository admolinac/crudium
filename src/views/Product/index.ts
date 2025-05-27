import type { PageComponent } from "../../types/pageComponentType";
import { getModal } from "../../utils/modalManager";
import { renderProductTable } from "./components/ProductTable";
import ProductTemplate from "./components/ProductTemplate";
import { setProductAddModalEvents, setProductEditModalEvents, setProductTableEvents } from "./events";

const Product: PageComponent = {
    render: () => ProductTemplate(),
    postRender: async () => {
        await renderProductTable();
    },
    bindEvents: () => {
        setProductTableEvents();

        const addModal = getModal("addProductModal");
        const editModal = getModal("editProductModal");

        if (addModal) setProductAddModalEvents(addModal);
        if (editModal) setProductEditModalEvents(editModal);
    }
};

export default Product;