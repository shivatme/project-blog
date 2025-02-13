import { CodeXml } from "lucide-react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router";

export const Appbar = () => {
  const token = localStorage.getItem("token");
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to={token ? "/blogs" : "/"}
          className="text-2xl font-bold flex items-center"
        >
          <CodeXml className="mr-2" /> Dev Bytes
        </Link>
        <nav>
          {token ? (
            <div>
              <Link to={`/publish`}>
                <button
                  type="button"
                  className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  New
                </button>
              </Link>
              <Link to={"/profile"}>
                <Avatar size={"big"} name="Test" />
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              className="text-purple-400 hover:text-purple-300"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
