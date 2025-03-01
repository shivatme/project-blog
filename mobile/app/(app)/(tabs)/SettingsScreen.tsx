import { useSession } from "@/authContext/ctx";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Tab() {
  const { signOut } = useSession();
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Settings]</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
