
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.link}>
        <Text style={styles.text}>Home</Text>
      </Link>

      <Link href={"/expolre"} style={styles.link}>
        <Text style={styles.text}>Explore</Text>
      </Link>

      <Link href={"/about"} style={styles.link}>
        <Text style={styles.text}>About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Changed to row for horizontal alignment
    backgroundColor: "#1b1b1b",
    alignItems: 'center',
    justifyContent: 'space-around', // Evenly distribute links
    paddingVertical: 10, // Add some padding
  },
  link: {
    paddingHorizontal: 15, // Add space around each link
  },
  text: {
    color: "#fff",
    fontSize: 18, // Adjust text size
  },
  active: {
    backgroundColor: "#FF7F7F",
  }
});

