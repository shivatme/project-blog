import zod from "zod";

export const signupSchema = zod.object({
  name: zod.string().min(2).max(60),
  email: zod.string().email(),
  password: zod.string().min(6).max(60),
  //   confirmPassword: zod.string().min(6).max(60),
});

export const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6).max(60),
});

export const createBlogSchema = zod.object({
  title: zod.string().min(2).max(60),
  //   description: zod.string().min(2).max(60),
  content: zod.string().min(2).max(60),
});

export const updateBlogSchema = zod.object({
  title: zod.string().min(2).max(60),
  //   description: zod.string().min(2).max(60),
  content: zod.string().min(2).max(60),
  id: zod.string().min(2).max(60),
});

export type SignupSchema = zod.infer<typeof signupSchema>;
export type SigninSchema = zod.infer<typeof signinSchema>;
export type CreateBlogSchema = zod.infer<typeof createBlogSchema>;
export type UpdateBlogSchema = zod.infer<typeof updateBlogSchema>;
