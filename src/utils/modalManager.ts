import { Modal } from "bootstrap";

// 🧩 Gestiona los modales de Bootstrap por ID

const modalMap = new Map<string, Modal>();

export const registerModal = (id: string, instance: Modal) => {
    modalMap.set(id, instance);
};

export const getModal = (id: string): Modal | undefined => {
    return modalMap.get(id);
};

export const hasModal = (id: string): boolean => {
    return modalMap.has(id);
};

export const clearModals = () => {
    modalMap.clear();
};