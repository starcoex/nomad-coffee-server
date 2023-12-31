import gql from "graphql-tag";

export default gql`
  type Query {
    seeUser(page: Int!, userName: String!): SeeUserResponse
  }
  type SeeUserResponse {
    ok: Boolean!
    error: String
    user: [User]
  }
`;
