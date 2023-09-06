import gql from "graphql-tag";

export default gql`
  type CoffeeShopPhoto {
    id: Int
    url: String
    coffeeShop: CoffeeShop!
    createdAt: String
    updatedAt: String
  }
`;
