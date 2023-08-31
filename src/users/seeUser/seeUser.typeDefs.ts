import gql from "graphql-tag";

export default gql`
  type Query {
    seeUser(userName: String!): SeeUserResponse
  }
  type SeeUserResponse {
    ok: Boolean!
    error: String
    user: User
  }
`;
