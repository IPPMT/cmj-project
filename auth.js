import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        // const checkUser = await prisma.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // });
        console.log(credentials);
        return true;
      },
    }),
  ],
});
