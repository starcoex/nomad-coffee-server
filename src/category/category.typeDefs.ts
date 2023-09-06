import gql from "graphql-tag";

export default gql`
  type Category {
    id: Int!
    name: String!
    slug: String!
    coffeeshops: [CoffeeShop]
    totalShops: Int!
    createdAt: String!
    updatedAt: String!
  }
`;
