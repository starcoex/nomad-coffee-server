import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import bcrypt from "bcrypt";

const resolvers: Resolvers = {
  Mutation: {
    createUser: async (
      _,
      { userName, email, password, name, location, githubUserName }
    ) => {
      try {
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                email,
                userName,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username or password is already taken.");
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: {
            userName,
            email,
            password: hashPassword,
            ...(name && { name }),
            ...(location && { location }),
            ...(githubUserName && { githubUserName }),
          },
        });
        return {
          ok: true,
          id: user.id,
          user,
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
