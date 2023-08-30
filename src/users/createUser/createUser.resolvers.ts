import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import bcrypt from "bcrypt";

const resolvers: Resolvers = {
  Mutation: {
    createUser: async (_, { userName, email, password, location }) => {
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
            location,
          },
        });
        return {
          ok: true,
          user,
        };
      } catch (error) {
        return {
          ok: false,
          error,
        };
      }
    },
  },
};

export default resolvers;
