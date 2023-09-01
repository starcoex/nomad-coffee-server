import gql from "graphql-tag";

export default gql`
  scalar Upload

  type Query {
    users: [User]
  }

  type User {
    id: Int!
    userName: String!
    email: String!
    name: String
    location: String
    password: String!
    avatarURL: String
    file: Upload
    githubUserName: String
  }

  # type File {
  #   filename: String
  #   mimetype: String
  #   encoding: String
  # }
`;
