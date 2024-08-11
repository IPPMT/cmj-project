"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function SignUp(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const register = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    console.log(register);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
