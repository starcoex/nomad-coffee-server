import gql from "graphql-tag";

export default gql`
  type File {
    id: Int!
    fileUrl: String!
  }

  input UploadFile {
    id: Int!
    file: Upload!
  }
`;
