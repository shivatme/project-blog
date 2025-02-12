import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useParams } from "react-router";
import { getBlogById } from "../services/blogService";

export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

// atomFamilies/selectorFamilies
export const Blog = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  async function getBlog(id: string) {
    setLoading(true);
    const response = await getBlogById(id);
    setBlog(response);
    setLoading(false);
  }

  useEffect(() => {
    if (id) getBlog(id);
  }, [id]);
  if (loading || !blog) {
    return (
      <div>
        <Appbar />

        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
