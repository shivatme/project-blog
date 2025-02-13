import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { getAllBlogs } from "../services/blogService";

import { Spinner } from "../components/Spinner";
export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const Blogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  async function getBlogs() {
    setLoading(true);
    const response = await getAllBlogs();
    setBlogs(response);
    setLoading(false);
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Appbar />
      {loading ? (
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      ) : (
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Latest Blog Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
              />
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
