import gql from "graphql-tag";

export default gql`
  type CoffeeShop {
    id: Int
    name: String!
    latitude: String!
    longitude: String!
    user: User!
    coffeeshopPhotos: [CoffeeShopPhoto]
    categories: [Category]
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    id: Int!
    name: String!
    slug: String!
    coffeeshops: [CoffeeShop]
    totalShops: Int!
    createdAt: String!
    updatedAt: String!
  }

  type CoffeeShopPhoto {
    id: Int!
    url: String
    coffeeShop: CoffeeShop!
    createdAt: String!
    updatedAt: String!
  }
`;
