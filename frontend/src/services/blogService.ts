import apiClient from "./apiClient";

export const getAllBlogs = async () => {
  const response = await apiClient.get("/blog/bulk");
  return response.data;
};

export const getBlogById = async (id: string) => {
  const response = await apiClient.get(`/blog/${id}`);
  return response.data.post;
};

export const createBlog = async (title: string, content: string) => {
  const response = await apiClient.post("/blog", { title, content });
  return response.data;
};
