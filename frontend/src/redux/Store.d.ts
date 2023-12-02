export interface Store {
    user: {
        accessToken: string | null,
        username?: string,
        email?: string
    }
}