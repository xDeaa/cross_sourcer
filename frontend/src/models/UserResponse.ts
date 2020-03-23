export default interface UserResponse {
    name: string,
    login: string,
    bio?: string,
    location?: string,
    company?: string,
    avatarUrl: string,
    url?: string,
    followers?: Total,
    following?: Total,
    repositories?: Total
}

interface Total {
    totalCount: number
}