import { Hono } from "hono";
import { getPrisma } from "../prismaFunction";
import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const token = authHeader.split(" ")[1];
  const decoded = await verify(token, c.env.JWT_SECRET);
  if (!decoded) {
    return c.json({ error: "Invalid token" }, 401);
  }
  c.set("userId", decoded.id);

  next();
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  const blogPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
      authorId: "26",
    },
  });

  return c.json({ id: blogPost.id });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = getPrisma(c.env.DATABASE_URL);

  const blogPost = await prisma.post.update({
    where: {
      id: c.req.param("id"),
    },
    data: {
      title: body.title,
      content: body.content,
      published: body.published,
    },
  });

  return c.json({ id: blogPost.id });
});
blogRouter.put("/blog", (c) => {
  return c.text("Hello Hono!");
});
blogRouter.get("/blog/:id", (c) => {
  return c.text("Hello Hono!");
});
