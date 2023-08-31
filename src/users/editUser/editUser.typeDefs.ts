import gql from "graphql-tag";

export default gql`
  type Mutation {
    editUser(
      userName: String
      email: String
      name: String
      location: String
      password: String
      avatarURL: String
      githubUserName: String
    ): CommonResponse!
  }
`;
