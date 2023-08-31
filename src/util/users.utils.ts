import * as jwt from "jsonwebtoken";
import prisma from "../prisma/client";

export const getUser = async (token: string) => {
  try {
    if (!token) {
      return null;
    }
    type TokenType = {
      id: string;
    };

    const verifiedToken = (await jwt.verify(
      token,
      process.env.PRIVATE_KEY
    )) as TokenType;
    if (
      typeof verifiedToken === "object" &&
      verifiedToken.hasOwnProperty("id")
    ) {
      const user = await prisma.user.findUnique({
        where: { id: +verifiedToken["id"] },
      });
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
