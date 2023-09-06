import prisma from "../../prisma/client";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { Resolvers } from "../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    loginUser: async (_, { userName, password }) => {
      try {
        const user = await prisma.user.findUnique({ where: { userName } });
        if (!user) {
          return {
            ok: false,
            error: "User not found.",
          };
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
          return {
            ok: false,
            error: "Incorrect password",
          };
        }
        const token = Jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
        return {
          ok: true,
          token,
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
