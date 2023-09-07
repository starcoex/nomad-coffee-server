import gql from "graphql-tag";

export default gql`
  type Query {
    seeCoffeesShops(lastId: Int): seeCoffeesShopsResponse
  }

  type seeCoffeesShopsResponse {
    ok: Boolean!
    error: String
    coffeeShop: [CoffeeShop]
  }
`;
