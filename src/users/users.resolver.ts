import { Resolvers } from "../generated/graphql";
import prisma from "../prisma/client";

export const resolvers: Resolvers = {
  User: {
    totalFollowers: ({ userName }) => {
      return prisma.user.count({
        where: { followers: { some: { userName } } },
      });
    },
    totalFollowing: ({ userName }) => {
      return prisma.user.count({
        where: { following: { some: { userName } } },
      });
    },
    isMe: ({ id }, _, { dataSources }) => {
      if (!dataSources.loggedInUser) {
        return false;
      }
      id = dataSources.loggedInUser.id;
      return true;
    },
    isFollowing: async ({ id }, _, { dataSources }) => {
      if (!dataSources.loggedInUser) {
        return false;
      }
      // const user = await prisma.user
      //   .findUnique({ where: { userName: dataSources.loggedInUser.userName } })
      //   .following({ where: { id } });
      const followingUser = await prisma.user.count({
        where: {
          userName: dataSources.loggedInUser.userName,
          following: { some: { id } },
        },
      });
      // return user.length > 0;
      return Boolean(followingUser);
    },
  },
};

export default resolvers;
