import { Resolvers } from "../../generated/graphql";
import prisma from "../../prisma/client";
import bcrypt from "bcrypt";

const resolvers: Resolvers = {
  Mutation: {
    editUser: async (
      _,
      { userName, email, password, name, location, githubUserName },
      { dataSources }
    ) => {
      try {
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
          },
        });
        if (userUpadate.id) {
          return {
            ok: true,
            id: userUpadate.id,
          };
        }
      } catch (error) {}
    },
  },
};

export default resolvers;
