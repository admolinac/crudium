// 🧩 Definición del tipo de componente de página

export type PageComponent = {
    render: () => HTMLElement;
    postRender?: () => Promise<void> | void;
    bindEvents?: () => void;
};