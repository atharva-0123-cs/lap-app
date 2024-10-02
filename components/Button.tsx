import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ButtonProp = {
  label: string;
  theme?: "primary" | "secondry" | "default";
  onPress: () => void;
}

export default function Button({ label, theme, onPress }: ButtonProp) {

  if (theme === "primary") {

    return (
      <View style={[styles.buttonContainr]}>
        <Pressable onPress={onPress} style={[styles.button, { backgroundColor: "#ffa", borderRadius: 10 }]}>
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]} >{label}</Text>
        </Pressable>
      </View>
    )

  }

  return (
    <View style={styles.buttonContainr}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonContainr: {
    width: 320,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,

  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    paddingRight: 8,
  }

})
