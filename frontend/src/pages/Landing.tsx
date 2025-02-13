import { Link } from "react-router";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NewsletterSignup from "../components/NewsletterSignup";

export default function Landing() {
  return (
    <main className="min-h-screen bg-black text-white font-spaceGrotesk">
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Dev Bytes
          </Link>
          <nav>
            <Link
              to="/blogs"
              className="text-purple-400 hover:text-purple-300 mr-4"
            >
              All Blogs
            </Link>
            <Link
              to="/signin"
              className="text-purple-400 hover:text-purple-300"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>
      <HeroSection />
      <FeaturedPosts />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
