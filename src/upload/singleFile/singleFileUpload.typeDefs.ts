import gql from "graphql-tag";

export default gql`
  type Mutation {
    singleFileUpload(id: Int!, avatarURL: String, file: Upload): CommonResponse!
  }
`;
