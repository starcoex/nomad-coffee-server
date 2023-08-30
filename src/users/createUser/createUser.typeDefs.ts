import gql from "graphql-tag";

export default gql`
  type Mutation {
    createUser(
      userName: String!
      email: String!
      name: String!
      location: String
      password: String!
      avatarURL: String
      githubUserName: String
    ): CreateUserResponse
  }

  type CreateUserResponse {
    ok: Boolean
    error: String
    user: User
  }
`;
