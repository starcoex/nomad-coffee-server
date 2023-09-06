import prisma from "../../prisma/client";
import { Resolvers } from "../../type";

const resolvers: Resolvers = {
  Query: {
    searchUser: async (_, { keyword, page }) => {
      try {
        if (keyword.length < 1) {
          return {
            ok: false,
            error: "Searching keyword length should be more than 1",
          };
        }
        const user = await prisma.user.findMany({
          where: {
            OR: [
              {
                userName: { startsWith: keyword.toLowerCase() },
              },
              { email: { startsWith: keyword.toLowerCase() } },
            ],
          },
          take: 25,
          skip: (page - 1) * 25,
        });
        if (!user) {
          return {
            ok: false,
            error: "Not user Found",
          };
        }
        return {
          ok: true,
          user,
        };
      } catch (error) {
        return {
          ok: false,
          error: "Not user Found",
        };
      }
    },
  },
};

export default resolvers;
