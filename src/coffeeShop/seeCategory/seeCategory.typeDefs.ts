import gql from "graphql-tag";

export default gql`
  type Query {
    seeCategories(page: Int): seeCategoriesResponse
  }

  type seeCategoriesResponse {
    ok: Boolean!
    error: String
    category: [Category]
  }
`;
