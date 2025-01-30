import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});
//Sign-Up
app.post("/signup", (c) => {
  return c.text("Hello Hono!");
});
app.post("/signin", (c) => {
  return c.text("Hello Hono!");
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
