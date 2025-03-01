import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@shivam5278/projec-blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//Sign-Up
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "Invalid Inputs" }, 411);
  }
  try {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const userExists = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (userExists) {
      return c.json({ message: "User already exists" }, 409);
    }
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const { success } = signinSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "Invalid Inputs" }, 411);
  }

  try {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      return c.json({ error: "Invalid Credentials" }, 401);
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ token: `Bearer ${token}` });
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
