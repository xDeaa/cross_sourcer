import UserResponse from "./UserResponse";
import Languages from "./Languages";

export default  interface RepositoryResponse {
    name: string,
    nameWithOwner: string,
    primaryLanguage: Languages,
    languages: {
        nodes: Array<Languages>
    },
    collaborators: {
        totalCount: number,
        nodes: Array<UserResponse>
    }
}
