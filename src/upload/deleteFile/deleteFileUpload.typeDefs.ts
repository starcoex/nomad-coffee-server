import gql from "graphql-tag";

export default gql`
  type Mutation {
    deleteFileUpload(id: Int!): CommonResponse!
  }
`;
