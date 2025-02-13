import { Link } from "react-router";
interface BlogCardProps {
  authorName?: string;
  title: string;
  content: string;
  publishedDate?: string;
  id: number;
}

export const BlogCard = ({ id, title, content }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 py-3 px-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400">{content.slice(0, 100) + "..."}</p>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
  onClick = () => {},
}: {
  name: string;
  size?: "small" | "big";
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-extralight text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
