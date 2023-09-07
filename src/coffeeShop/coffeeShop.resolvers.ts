import { Resolvers } from "../generated/graphql";
import prisma from "../prisma/client";

const resolvers: Resolvers = {
  CoffeeShop: {
    user: async ({ id }, _, { dataSources }) => {
      const user = await prisma.user.findUnique({
        where: { id: dataSources.loggedInUser.id },
      });
      return user;
    },
    categories: async ({ id }, { lastId }, { dataSources }) => {
      const categories = await prisma.category.findMany({
        where: {
          coffeeshops: { some: { userId: dataSources.loggedInUser.id } },
        },
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });
      return categories as [];
    },
    coffeeshopPhotos: async ({ id }, { lastId }, { dataSources }) => {
      const coffeeshopPhotos = await prisma.coffeeShopPhoto.findMany({
        where: {
          coffeeShop: { id },
        },
        take: 5,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId } }),
      });
      return coffeeshopPhotos as [];
    },
  },
  Category: {
    totalShops: ({ id }, _, { dataSources }) => {
      return prisma.coffeeShop.count({
        where: { categories: { some: { id } } },
      });
    },
    coffeeshops: async ({ id }, { lastId }, { dataSources }) => {
      const coffeeshops = await prisma.category
        .findUnique({ where: { id } })
        .coffeeshops({
          take: 5,
          skip: lastId ? 1 : 0,
          ...(lastId && { cursor: { id: lastId } }),
        });
      // const coffeeshops = await prisma.category.findMany({
      //   where: { coffeeshops: { some: { id } } },
      // });
      return coffeeshops as [];
    },
  },
};

export default resolvers;
