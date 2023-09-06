import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Query: {
    seeCoffeesShops: async (_, { page }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findMany({
          take: 5,
          skip: (page - 1) * 5,
          include: {
            coffeeshopPhotos: {
              select: { url: true },
            },
          },
        });
        return {
          ok: true,
          coffeeShop: coffeeShop as [],
        };
      } catch (error) {
        return {
          ok: false,
          error: "CoffeeShop not found.",
        };
      }
    },
  },
};

export default resolvers;
