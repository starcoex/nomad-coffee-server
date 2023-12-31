import gql from "graphql-tag";

export default gql`
  type Query {
    seeCoffeeShop(id: Int!): seeCoffeeShopResponse
  }

  type seeCoffeeShopResponse {
    ok: Boolean!
    error: String
    coffeeShop: CoffeeShop!
    coffeeShopPhoto: CoffeeShopPhoto
  }
`;
