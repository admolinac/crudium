import Header from "../templates/Header";
import Footer from "../templates/Footer";
import { routes } from "./routes";
import Error404 from "../views/Errors/Error404";
import Error500 from "../views/Errors/Error500";
import getPath from "../utils/getPath";
import updateActiveLinks from "../utils/updateActiveLinks";
import type { PageComponent } from "../types/pageComponentType";
import { clearModals } from "../utils/modalManager";

// 🧩 Router: Maneja la navegación y renderizado de componentes según la ruta actual

const router = async () => {
    const header = document.getElementById("header") as HTMLElement;
    const content = document.getElementById("app") as HTMLElement;
    const footer = document.getElementById("footer") as HTMLElement;
    const modalRoot = document.getElementById("modal-root") as HTMLElement;

    try {
        if (!header || !content || !footer) return;

        header.replaceChildren(Header());
        footer.replaceChildren(Footer());

        if (modalRoot) {
            modalRoot.replaceChildren();
        }
        clearModals();

        const path = getPath();
        const component: PageComponent | undefined = routes[path];

        if (!component) {
            content.replaceChildren(Error404());
            return;
        }

        const view = component.render();
        content.replaceChildren(view);

        if (component.postRender) await component.postRender();
        if (component.bindEvents) component.bindEvents();

        updateActiveLinks(path);

    } catch (error) {
        console.error("Routing error:", error);
        if (content) {
            content.replaceChildren(Error500());
        }
    }

}

export default router;