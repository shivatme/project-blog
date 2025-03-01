import { Slot } from "expo-router";
import { SessionProvider } from "../authContext/ctx";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <StatusBar style="light" />
      <Slot />
    </SessionProvider>
  );
}
