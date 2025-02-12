export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black z-0">
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold  mb-4 animate-pulse">Dev Bytes</h1>
          <p className="text-xl mb-3">A blogging platform for developers</p>
          <p className="text-xl mb-8">
            Exploring the frontier of Software Development
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Explore Articles
          </button>
        </div>

        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
      </div>
    </section>
  );
}
