import prisma from "../prisma/client";
import { Resolvers } from "../type";

export const resolvers: Resolvers = {
  User: {
    test: (parent) => {
      console.log(parent);
      return "test";
    },
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
      console.log(id);
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
    totalShops: async (parent, _, { dataSources }) => {
      console.log("Hooe ", parent);
      return null;
    },

    // coffeeShops: ({ id }, _, { dataSources }) => {
    //   return prisma.coffeeShop.findMany({ where: { user: { id } } });
    // },
  },
};

export default resolvers;
