import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const BlogDetailScreen = ({ route }: { route: any }) => {
  const { blogId } = route.params;

  // Mock data for a single blog post
  const blogPost = {
    id: blogId,
    title: "The Future of AI in Software Development",
    content: `Artificial Intelligence (AI) is rapidly transforming the landscape of software development. As we move into an era where AI-powered tools and techniques become more sophisticated, developers are finding new ways to leverage these technologies to streamline their workflows, improve code quality, and accelerate the development process.

    One of the most significant impacts of AI on software development is in the realm of code generation and completion. AI-powered code assistants can now suggest entire functions or blocks of code based on the context of what a developer is working on. This not only speeds up the coding process but also helps reduce errors and improve overall code quality.

    Another area where AI is making waves is in software testing and quality assurance. AI algorithms can analyze vast amounts of code and test data to identify potential bugs and vulnerabilities that human testers might miss. This leads to more robust and secure software applications.

    As AI continues to evolve, we can expect to see even more innovative applications in software development. From AI-driven project management tools that can predict timelines and resource needs, to advanced debugging assistants that can pinpoint and fix issues in real-time, the future of software development with AI looks incredibly promising.

    However, it's important to note that AI is not replacing human developers. Instead, it's augmenting their capabilities, allowing them to focus on more creative and strategic aspects of software development. The key for developers moving forward will be to embrace these AI tools and learn how to work alongside them effectively.

    In conclusion, the integration of AI into software development practices is ushering in a new era of efficiency, quality, and innovation. As these technologies continue to advance, we can look forward to a future where the synergy between human creativity and AI capabilities leads to unprecedented advancements in the world of software.`,
    image: "https://picsum.photos/800/400",
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: blogPost.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.body}>{blogPost.content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    color: "#d1d5db",
    lineHeight: 24,
  },
});

export default BlogDetailScreen;
