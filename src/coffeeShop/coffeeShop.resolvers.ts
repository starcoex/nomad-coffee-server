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
    categories: async ({ id }, _, { dataSources }) => {
      const categories = await prisma.category.findMany({
        where: {
          coffeeshops: { some: { userId: dataSources.loggedInUser.id } },
        },
      });
      return categories as [];
    },
    coffeeshopPhotos: async ({ id }, _, { dataSources }) => {
      const coffeeshopPhotos = await prisma.coffeeShopPhoto.findMany({
        where: {
          coffeeShop: { id },
        },
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
  },
};

export default resolvers;
