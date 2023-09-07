import gql from "graphql-tag";

export default gql`
  type Mutation {
    createCoffeeShop(
      name: String
      latitude: String
      longitude: String
      categories: [String]
      file: Upload
    ): createCoffeeShopResponse
  }

  type createCoffeeShopResponse {
    ok: Boolean!
    error: String
    # coffeeShop: CoffeeShop
  }
`;
