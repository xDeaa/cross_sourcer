import { gql } from "apollo-boost";

function repositoriesDetails(name: string, totalRepostiory: number) {
    return gql` 
    query { 
        user(login: "${name}"){
            repositories(last: ${totalRepostiory}){
                totalCount,
                nodes{
                    name
                    nameWithOwner
                    primaryLanguage{
                        name
                        color
                    }
                    languages(last: 50){
                        nodes{
                            name
                            color
                        }
                    }
                    collaborators{
                        totalCount
                        nodes{
                            name
                            login
                            avatarUrl
                        }
                    }
                    
                }
            }
      }
    }
    `
}

// collaborators{
//     totalCount
//     nodes{
//         name
//         login
//         avatarUrl
//     }
// }

export default repositoriesDetails;