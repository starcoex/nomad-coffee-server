import { Resolvers } from "../generated/graphql";
import prisma from "../prisma/client";

const resolvers: Resolvers = {
  User: {
    totalFollowers: async ({ userName }, _, { dataSources }) => {
      const totalFollowers = await prisma.user.count({
        where: { followers: { some: { userName } } },
      });
      return totalFollowers;
    },
    totalFollowing: async ({ userName }, _, { dataSources }) => {
      const totalFollowing = await prisma.user.count({
        where: { following: { some: { userName } } },
      });
      return totalFollowing;
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
      return Boolean(followingUser);
    },
    totalShops: async ({ id }, _, { dataSources }) => {
      const totalShops = await prisma.coffeeShop.count({
        where: { userId: id },
      });
      return totalShops;
    },
    coffeeShops: async ({ id }, _, { dataSources }) => {
      const coffeeShops = await prisma.user
        .findUnique({
          where: { id },
        })
        .coffeeShops();
      return coffeeShops as [];
    },
  },
};

export default resolvers;
