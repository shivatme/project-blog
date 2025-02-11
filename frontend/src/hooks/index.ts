import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { getAllBlogs, getBlogById } from "../services/blogService";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    getBlog(id);
  }, [id]);
  async function getBlog(id: string) {
    const response = await getBlogById(id);
    setBlog(response);
    setLoading(false);
  }

  return {
    loading,
    blog,
  };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogs();
  }, []);
  async function getBlogs() {
    const response = await getAllBlogs();
    setBlogs(response);
    setLoading(false);
  }
  return {
    loading,
    blogs,
  };
};
