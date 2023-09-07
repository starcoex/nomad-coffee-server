import gql from "graphql-tag";

export default gql`
  type Query {
    seeCategories(lastId: Int): seeCategoriesResponse
  }

  type seeCategoriesResponse {
    ok: Boolean!
    error: String
    coffeeshops: [CoffeeShop]
  }
`;
