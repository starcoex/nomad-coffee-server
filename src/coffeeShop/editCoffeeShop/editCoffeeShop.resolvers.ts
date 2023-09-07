import { Resolvers, CoffeeShop } from "../../generated/graphql";
import prisma from "../../prisma/client";
import { uploadAwsS3 } from "../../shared/shared.util";

const resolvers: Resolvers = {
  Mutation: {
    editCoffeeShop: async (
      _,
      { id, name, latitude, longitude, categories, file },
      { dataSources }
    ) => {
      try {
        let categoryObj = [];
        let coffeeShopPhotoUrl: string | null = null;
        const coffeeShop = await prisma.coffeeShop.findUnique({
          where: { id },
          include: { categories: { select: { id: true } } },
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
        if (file) {
          coffeeShopPhotoUrl = await uploadAwsS3(
            file,
            dataSources.loggedInUser.id,
            "nomad_coffee"
          );
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
                disconnect: coffeeShop.categories,
                connectOrCreate: categoryObj,
              },
            }),
            ...(coffeeShopPhotoUrl && {
              coffeeshopPhotos: {
                update: { where: { id }, data: { url: coffeeShopPhotoUrl } },
              },
            }),
          },
        });
        // if (file) {
        //   const coffeeShopPhoto = await prisma.coffeeShopPhoto.findFirst({
        //     where: { coffeeShopId: coffeeShop.id },
        //   });
        // }
        return {
          ok: true,
          id: updateCoffeeShop.id,
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
