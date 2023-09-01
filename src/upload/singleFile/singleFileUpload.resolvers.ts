import { GraphQLUpload } from "graphql-upload-minimal";
import { Resolvers } from "../../generated/graphql";
import { createWriteStream } from "fs";
import prisma from "../../prisma/client";

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    singleFileUpload: async (_, { id, avatarURL, file }, { dataSources }) => {
      try {
        const fileUser = await prisma.user.findUnique({
          where: { id },
          include: {
            files: {
              select: {
                fileURL: true,
              },
            },
          },
        });
        if (file) {
          const { filename, createReadStream }: any = await file;
          const readStream = createReadStream();
          const newFilename = `${
            dataSources.loggedInUser.id
          }-${Date.now()}-${filename}`;
          const writeStream = createWriteStream(
            `${process.cwd()}/uploads/${newFilename}`
          );
          readStream.pipe(writeStream);
          avatarURL = `http:localhost:${process.env.PORT}/static/${newFilename}`;
          console.log(avatarURL);
        }
        const fileUpload = await prisma.file.create({
          data: {
            fileURL: avatarURL,
            user: {
              connect: {
                // id: dataSources.loggedInUser.id,
                id: fileUser.id,
              },
            },
          },
        });
        console.log(fileUpload);
        return {
          ok: true,
          id: fileUpload.id,
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
