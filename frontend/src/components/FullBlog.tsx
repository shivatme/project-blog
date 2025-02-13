import { Link } from "react-router";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";
import { ArrowLeft } from "lucide-react";
import { Blog } from "../pages/Blog";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Appbar />
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <Link
          to="/blogs"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="text-lg font-medium">Back to all posts</span>
        </Link>

        <article className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-extrabold leading-snug mb-6">
            {blog.title}
          </h1>
          <div className="text-slate-500 text-sm mb-6">
            Posted on 2nd December 2023
          </div>
          <div className="prose prose-invert max-w-none leading-relaxed">
            <p>{blog.content}</p>
          </div>
        </article>

        <div className="mt-10 p-6 bg-gray-800 rounded-2xl flex items-center gap-4 max-w-xl ">
          <Avatar size="big" name={blog.author?.name || "Anonymous"} />
          <div>
            <div className="text-xl font-semibold">
              {blog.author?.name || "Anonymous"}
            </div>
            <div className="text-slate-400 text-sm mt-1">
              "Random catchphrase about the author's ability to grab the user's
              attention."
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
