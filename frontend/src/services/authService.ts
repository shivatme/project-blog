import apiClient from "./apiClient";

export const signUp = async (name: string, email: string, password: string) => {
  const response = await apiClient.post("/user/signup", {
    name,
    email,
    password,
  });
  return response.data;
};
export const signIn = async (email: string, password: string) => {
  const response = await apiClient.post("/user/signin", {
    email,
    password,
  });
  return response.data;
};
