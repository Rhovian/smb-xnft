import { StyleSheet, ActivityIndicator, View, Dimensions } from "react-native";
import { Screen } from "../components/Screen";
import { useLatestUrl } from "../hooks/useLatestUrl";

export function HomeScreen() {
  console.log(window.xnft)
  const data = useLatestUrl();
  return (
    <>
      {data.isLoading ?
        <View
          style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
          <ActivityIndicator size="large" color="black" />
        </View> : (
          <Screen style={styles.container}>
            <iframe style={styles.iframe} src={data.data?.url} allow="autoplay"></iframe>
          </Screen>
        )}
    </>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      height: '100vh',
      padding: 0,
    },
    iframe: {
      aspectRatio: 16 / 9,
      width: '100%',
      height: '100%',
    }
  }
);
