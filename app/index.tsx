import { View } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar'
import ImageViewer from "@/components/image_viewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker'

const placeholder = require('../assets/Sukuna vs Mahoraga _ @AoratosMeka Twitter ☆.jpeg')

export default function App() {

  const pickImageAsync = async () => {



  }


  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer placeholederimage={placeholder} />
      </View>
      <View>
        <Button label="Add Me" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => alert("You clicked me ")} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    padding: 10,
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    gap: 8,
    alignItems: 'center',
  },
  footercontainer: {
    alignItems: 'center',
  }

})
