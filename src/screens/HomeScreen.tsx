import { StyleSheet } from "react-native";
import { Screen } from "../components/Screen";

export function HomeScreen() {
  const source = require('../assets/banana_split_066.pdf')


  return (
    <Screen style={styles.container}>
      <iframe style={styles.iframe} src="https://drive.google.com/file/d/1rFDNjF2tF7Zjq9y_lKTYcfcPmEUA61gu/preview" allow="autoplay"></iframe>
    </Screen>
  );
}

const styles  = StyleSheet.create(
  {
    container: {
      height: '100vh',
      padding: 0,
    },
    iframe: {
      aspectRatio: 16/9,
      width: '100%',
      height: '100%',
    }
  }
);
