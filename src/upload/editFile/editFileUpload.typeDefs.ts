import gql from "graphql-tag";

export default gql`
  type Mutation {
    editFileUpload(id: Int!, avatarURL: String): CommonResponse!
  }
  type EditFileUploadResponse {
    ok: Boolean!
    error: String
    file: File
  }
`;
