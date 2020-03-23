import { gql } from "apollo-boost";

function UserInformation(name: string) {
  return gql`
            query{
                user(login: "${name}"){
                  name
                  login
                  avatarUrl
                  status{
                    message
                  }
                  bio
                  location
                  email
                  company
                  url
                  followers {
                    totalCount
                  }
                  following {
                    totalCount
                  }
                  repositories{
                    totalCount
                  }
                }
            }
            `
}

export default UserInformation
