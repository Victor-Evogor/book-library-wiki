import { User } from "../types/User";

export interface Store {
    user: User,
    isModalOpen: boolean,
    modalContent: null | string
}