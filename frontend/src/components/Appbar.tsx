import { CodeXml, LogOut, User } from "lucide-react";

import { Link } from "react-router";
import { useAuth } from "../auth/AuthContext";

export const Appbar = () => {
  const auth = useAuth();
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center text-white"
        >
          <CodeXml className="mr-2" /> Dev Bytes
        </Link>
        <nav className="flex items-center">
          <Link
            to="/blogs"
            className="text-purple-400 hover:text-purple-300 mr-4"
          >
            All Blogs
          </Link>
          {auth?.token ? (
            <>
              <Link
                to="/publish"
                className="text-purple-400 hover:text-purple-300 mr-4"
              >
                Create Post
              </Link>
              <Link
                to="/profile"
                className="text-purple-400 hover:text-purple-300 mr-4"
              >
                <User size={20} />
              </Link>
              <button
                onClick={auth?.logOut}
                className="text-purple-400 hover:text-purple-300"
              >
                <LogOut size={20} />
              </button>
            </>
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
