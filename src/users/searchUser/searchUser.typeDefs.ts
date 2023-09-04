import gql from "graphql-tag";

export default gql`
  type Query {
    searchUser(keyword: String!, page: Int): SearchUserResponse!
  }

  type SearchUserResponse {
    ok: Boolean!
    error: String
    user: [User]
  }
`;
