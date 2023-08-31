import gql from "graphql-tag";

export default gql`
  type Mutation {
    loginUser(userName: String!, password: String!): LoginUserResponse!
  }

  type LoginUserResponse {
    ok: Boolean!
    token: String
    error: String
  }
`;
