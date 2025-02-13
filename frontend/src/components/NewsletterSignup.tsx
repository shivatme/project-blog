export default function NewsletterSignup() {
  return (
    <section className="py-16 px-4 md:px-8 bg-purple-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">
          Subscribe to our newsletter for the latest in software development
          trends and insights.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-full bg-purple-800 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-purple-600 rounded-full py-2 px-6 text-white hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
