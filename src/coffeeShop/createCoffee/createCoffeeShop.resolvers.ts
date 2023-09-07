import { GraphQLUpload, Upload } from "graphql-upload-minimal";
import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import { uploadAwsS3 } from "../../shared/shared.util";

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    createCoffeeShop: async (
      _,
      { name, latitude, longitude, categories, file },
      { dataSources }
    ) => {
      try {
        let categoryObj = [];
        let coffeeShopPhotoUrl: string | null = null;
        if (file) {
          coffeeShopPhotoUrl = await uploadAwsS3(
            file,
            dataSources.loggedInUser.id,
            "uploads"
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
        const coffeeShop = await prisma.coffeeShop.create({
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
            ...(coffeeShopPhotoUrl && {
              coffeeshopPhotos: {
                create: { url: coffeeShopPhotoUrl },
                // connectOrCreate: {
                //   where: { url: coffeeShopPhotoUrl },
                //   create: { url: coffeeShopPhotoUrl },
                // },
              },
            }),
          },
        });

        return {
          ok: true,
          id: coffeeShop.id,
        };
      } catch (e) {
        return {
          ok: false,
          error: e.message,
        };
      }
    },
  },
};

export default resolvers;
