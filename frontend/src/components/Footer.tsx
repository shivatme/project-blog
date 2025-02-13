import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className=" text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Dev Bytes Blog</h3>
          <p className="text-gray-400">A blogging platform for developers</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © 2025 FutureDev Blog. All rights reserved.
      </div>
    </footer>
  );
}
