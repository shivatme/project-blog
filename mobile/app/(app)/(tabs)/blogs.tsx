import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomButton from "@/components/CustomButton";

const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    excerpt:
      "Exploring how AI is revolutionizing the way we write and maintain code.",
    image: "https://picsum.photos/300/200",
  },
  {
    id: "2",
    title: "Quantum Computing: A New Era for Developers",
    excerpt:
      "Understanding the basics of quantum computing and its potential impact on software development.",
    image: "https://picsum.photos/300/201",
  },
  {
    id: "3",
    title: "The Rise of Low-Code Platforms",
    excerpt:
      "How low-code platforms are changing the landscape of software development.",
    image: "https://picsum.photos/300/202",
  },
];

const BlogsScreen = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.blogCard}
      onPress={() => navigation.navigate("BlogDetail", { blogId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.blogImage} />
      <View style={styles.blogContent}>
        <Text style={styles.blogTitle}>{item.title}</Text>
        <Text style={styles.blogExcerpt}>{item.excerpt}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={blogPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {
        <CustomButton
          title="Create Post"
          onPress={() => navigation.navigate("CreatePost")}
          style={styles.createButton}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  listContainer: {
    padding: 16,
  },
  blogCard: {
    backgroundColor: "#1f2937",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  blogImage: {
    width: "100%",
    height: 200,
  },
  blogContent: {
    padding: 16,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  blogExcerpt: {
    fontSize: 14,
    color: "#9ca3af",
  },
  createButton: {
    margin: 16,
  },
});

export default BlogsScreen;
