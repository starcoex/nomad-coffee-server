import gql from "graphql-tag";

export default gql`
  type Mutation {
    unFollowerUser(userName: String): UnFollowerUserResponse
  }

  type UnFollowerUserResponse {
    ok: Boolean!
    error: String
    token: String
  }
`;
