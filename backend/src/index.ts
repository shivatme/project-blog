import { Hono } from "hono";
import { getPrisma } from "./prismaFunction";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

//Sign-Up
app.post("/signup", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ token });
});

app.post("/signin", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);

  const body = await c.req.json();

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

  return c.json({ token });
});
app.post("/blog", (c) => {
  return c.text("Hello Hono!");
});
app.put("/blog", (c) => {
  return c.text("Hello Hono!");
});
app.get("/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;
