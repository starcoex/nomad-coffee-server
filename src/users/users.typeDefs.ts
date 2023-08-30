import gql from "graphql-tag";

export default gql`
  type Query {
    users: [User]
  }

  type User {
    id: Int!
    userName: String
    email: String
    name: String!
    location: String
    password: String
    avatarURL: String!
    githubUserName: String!
  }
`;
