import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteCoffeeShop(id: Int!): CommonResponse
  }
`;
