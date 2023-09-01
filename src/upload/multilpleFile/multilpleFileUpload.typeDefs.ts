import gql from "graphql-tag";

export default gql`
  type Mutation {
    multipleFileUpload(input: UploadFile): File
  }
`;
