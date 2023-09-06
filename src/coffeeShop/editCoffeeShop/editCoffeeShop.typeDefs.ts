import gql from "graphql-tag";

export default gql`
  type Mutation {
    editCoffeeShop(
      id: Int!
      name: String
      latitude: String
      longitude: String
      categories: [String]
    ): editCoffeeShopResponse
  }
  type editCoffeeShopResponse {
    ok: Boolean!
    error: String
    coffeeShop: CoffeeShop
    # coffeeshopPhotos: [CoffeeShopPhoto]
  }
`;
