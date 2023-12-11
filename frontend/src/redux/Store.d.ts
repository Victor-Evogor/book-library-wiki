import { User } from "../types/User";
import { ReactNode } from 'react'

export interface Store {
    user: User,
    isModalOpen: boolean,
    modalContent: null | ReactNode
}