import { Wiki } from "./Wiki";

export interface User {
    accessToken: string | null,
    _id?: string,
    username?: string,
    email?: string,
    avatar?: string,
    bio?: string,
    followers?: string[],
    following?: string[],
    wikis?: Wiki[]
}