import { verify } from "hono/jwt";
import { Context, Next } from "hono";
import { JWTPayload } from "hono/utils/jwt/types";

type Bindings = {
  JWT_SECRET: string;
};

type Variables = {
  userId: string;
};

const authMiddleware = async (
  c: Context<{ Bindings: Bindings; Variables: Variables }>,
  next: Next
) => {
  const authHeader = c.req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = (await verify(token, c.env.JWT_SECRET)) as JWTPayload & {
      id: string;
    };
    c.set("userId", payload.id);
    await next();
  } catch (error) {
    return c.json({ error: "Invalid or expired token" }, 401);
  }
};

export default authMiddleware;
