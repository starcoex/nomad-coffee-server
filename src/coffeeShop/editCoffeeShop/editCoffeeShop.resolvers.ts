import { Resolvers, CoffeeShop } from "../../generated/graphql";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Mutation: {
    editCoffeeShop: async (
      _,
      { id, name, latitude, longitude, categories },
      { dataSources }
    ) => {
      try {
        let categoryObj = [];
        const coffeeShop = await prisma.coffeeShop.findUnique({
          where: { id },
        });
        if (!coffeeShop) {
          return {
            ok: false,
            error: "CoffeeShop not found.",
          };
        }
        if (coffeeShop.userId !== dataSources.loggedInUser.id) {
          return {
            ok: false,
            error: "CoffeeShop not found",
          };
        }
        if (categories) {
          categories.map(async (category) => {
            const trimCategory = category.trim().toLowerCase();
            const categorySlug = trimCategory.replace(/ +/g, "-");
            categoryObj = [
              {
                where: { name: trimCategory, slug: categorySlug },
                create: { name: trimCategory, slug: categorySlug },
              },
            ];
          });
        }
        const updateCoffeeShop = await prisma.coffeeShop.update({
          where: {
            id,
          },
          data: {
            name,
            latitude,
            longitude,
            user: { connect: { id: dataSources.loggedInUser.id } },
            ...(categoryObj.length > 0 && {
              categories: {
                connectOrCreate: categoryObj,
              },
            }),
          },
        });
        return {
          ok: true,
          coffeeShop: updateCoffeeShop,
        };
      } catch (error) {
        return {
          ok: false,
          error: "Edit not",
        };
      }
    },
  },
};

export default resolvers;
