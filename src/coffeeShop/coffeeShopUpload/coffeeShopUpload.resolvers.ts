import { GraphQLUpload } from "graphql-upload-minimal";
import prisma from "../../prisma/client";
import { createWriteStream } from "fs";
import { Resolvers } from "../../generated/graphql";

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    coffeeShopUplad: async (_, { id, file, url }, { dataSources }) => {
      try {
        const coffeeShop = await prisma.coffeeShop.findFirst({
          where: {
            user: { id: dataSources.loggedInUser.id },
          },
        });
        if (file) {
          const { filename, createReadStream }: any = await file;
          const readStream = createReadStream();
          const newFilename = `${
            dataSources.loggedInUser?.id
          }-${Date.now()}-${filename}`;
          const writeStream = createWriteStream(
            `${process.cwd()}/uploads/${newFilename}`
          );
          readStream.pipe(writeStream);
          url = `http:localhost:${process.env.PORT}/static/${newFilename}`;
        }

        const coffeeShopUpload = await prisma.coffeeShopPhoto.create({
          data: {
            url,
            coffeeShop: { connect: { id: coffeeShop.id } },
          },
        });
        return {
          ok: true,
          id: coffeeShopUpload.id,
        };
      } catch (error) {
        return {
          ok: false,
          error: "Not Upload",
        };
      }
    },
  },
};

export default resolvers;
