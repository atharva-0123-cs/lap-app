import Navbar from "@/components/navbar";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

  return (
    <SafeAreaView style={{ backgroundColor: "#1b1b1b", height: "100%" }}>
      <Navbar />
      <Slot />
    </SafeAreaView>
  );

}
