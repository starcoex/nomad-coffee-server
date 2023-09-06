import { Resolvers, Category } from "../generated/graphql";
import prisma from "../prisma/client";

const resolvers: Resolvers = {
  CoffeeShop: {
    //@ts-ignore
    coffeeshopPhotos: async ({ id }, _, { dataSources }) => {
      console.log("dafds");
      return await prisma.coffeeShopPhoto.findMany({
        where: {
          coffeeShop: { id },
        },
        include: { coffeeShop: true },
      });
    },
    // categories: ({ id }, _, { dataSources }) => {
    //   return prisma.coffeeShop.findMany({
    //     include: { categories: true },
    //   });
    // },
  },
  Category: {
    totalShops: ({ id }, _, { dataSources }) => {
      console.log("dasfda");
      return prisma.coffeeShop.count({
        where: { categories: { some: { id } } },
      });
    },
  },
};

export default resolvers;
