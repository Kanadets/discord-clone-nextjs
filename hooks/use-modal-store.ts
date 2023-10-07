import { create } from "zustand";
import { Server } from "@prisma/client";

export type ModalType = "createServer" | "invite" | "editServer" | "members" | "createChannel";

interface ModelData {
    server?: Server;
}

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    data: ModelData;
    onOpen: (type: ModalType, data?: ModelData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    data: {},
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null }),
}));
