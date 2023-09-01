import { GraphQLUpload } from "graphql-upload-minimal";
import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import bcrypt from "bcrypt";
import { createWriteStream } from "fs";
import { Upload } from "../../types/upload";

const resolvers: Resolvers = {
  Upload: GraphQLUpload,
  Mutation: {
    editUser: async (
      _,
      {
        userName,
        email,
        password,
        name,
        location,
        githubUserName,
        file,
        avatarURL,
      },
      { dataSources }
    ) => {
      try {
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

        let hashPassword = null;
        if (password) {
          hashPassword = await bcrypt.hash(password, 10);
        }
        const userUpadate = await prisma.user.update({
          where: { id: dataSources.loggedInUser.id },
          data: {
            userName,
            email,
            ...(password && { password: hashPassword }),
            ...(avatarURL && { avatarURL }),
          },
        });
        if (userUpadate.id) {
          return {
            ok: true,
            id: userUpadate.id,
          };
        }
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
