import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteFileCoffee(id: Int!): CommonResponse!
  }
`;
