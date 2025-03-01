import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { useSession } from "../authContext/ctx";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useSession();

  const handleSubmit = () => {
    // Here you would typically authenticate with your backend
    console.log("Auth submitted:", { email, password });
    signIn();
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isLogin ? "Sign in to your account" : "Create a new account"}
      </Text>
      <CustomInput placeholder="Email" value={email} onChangeText={setEmail} />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton
        title={isLogin ? "Sign In" : "Sign Up"}
        onPress={handleSubmit}
        style={styles.submitButton}
      />
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin
            ? "Need an account? Sign up"
            : "Already have an account? Sign in"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  submitButton: {
    marginTop: 20,
  },
  switchText: {
    color: "#8b5cf6",
    textAlign: "center",
    marginTop: 20,
  },
});
