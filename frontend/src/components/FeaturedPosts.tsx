export default function FeaturedPosts() {
  const posts = [
    {
      title: "The Future of AI in Software Development",
      excerpt:
        "Exploring how AI is revolutionizing the way we write and maintain code.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Quantum Computing: A New Era for Developers",
      excerpt:
        "Understanding the basics of quantum computing and its potential impact on software development.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "The Rise of Low-Code Platforms",
      excerpt:
        "How low-code platforms are changing the landscape of software development.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* <img src={post.image} alt={post.title} /> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400">{post.excerpt}</p>
              <button className="mt-4 text-purple-400 hover:text-purple-300">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
