import { User } from "./User";

export interface Wiki {
    _id: string,
    name: string,
    image: string,
    description: string,
    likes: number,
    publishDate: string,
    user: User
}