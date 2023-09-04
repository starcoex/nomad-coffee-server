import gql from "graphql-tag";

export default gql`
  type Mutation {
    followerUser(userName: String): FollowerUserResponse
  }

  type FollowerUserResponse {
    ok: Boolean!
    error: String
    token: String
  }
`;
