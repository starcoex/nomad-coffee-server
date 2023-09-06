import gql from "graphql-tag";

export default gql`
  scalar Upload

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
    followers: [User]
    following: [User]
    coffeeShops: [CoffeeShop]
    totalShops: Int
    totalFollowing: Int
    totalFollowers: Int
    isFollowing: Boolean
    isMe: Boolean
  }
`;
