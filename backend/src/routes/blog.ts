import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign, verify } from "hono/jwt";
import authMiddleware from "../middlewares/auth";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@shivam5278/projec-blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: any;
  };
}>();

blogRouter.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      author: { select: { name: true } },
    },
  });

  return c.json(posts);
});

blogRouter.get("/:id", async (c) => {
  try {
    const blogId = c.req.param("id");
    const prisma = getPrisma(c.env.DATABASE_URL);
    const post = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json({ post }, 201);
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

blogRouter.use("/*", authMiddleware);

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = createBlogSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "Invalid Inputs" }, 411);
  }

  try {
    const userId = c.get("userId");
    const prisma = getPrisma(c.env.DATABASE_URL);
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json(
      {
        id: post.id,
        message: "Successfully created blog post",
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const { success, data } = updateBlogSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "Invalid Inputs" }, 411);
  }

  try {
    const userId = c.get("userId");
    const prisma = getPrisma(c.env.DATABASE_URL);
    const post = await prisma.post.update({
      where: {
        id: data.id,
        authorId: userId,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
    return c.json(
      {
        id: post.id,
        message: "Successfully updated blog post",
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error" }, 500);
  }
});
