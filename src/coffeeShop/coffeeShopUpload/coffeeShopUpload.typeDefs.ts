import gql from "graphql-tag";

export default gql`
  scalar Upload

  type Mutation {
    coffeeShopUplad(id: Int, file: Upload, url: String): CommonResponse!
  }
`;
