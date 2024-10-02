import { Image, ImageSourcePropType, StyleSheet } from "react-native";

export default function ImageViewer({ placeholederimage }: { placeholederimage: ImageSourcePropType }) {

  return (
    <Image style={styles.image} source={placeholederimage} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 450,
    borderRadius: 14,
  },

})
