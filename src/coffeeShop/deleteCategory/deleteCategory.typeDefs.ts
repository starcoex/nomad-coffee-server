import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteCategory(id: Int!): CommonResponse
  }
`;
