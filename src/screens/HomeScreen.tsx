import { StyleSheet, ActivityIndicator, View, Dimensions } from "react-native";
import { Screen } from "../components/Screen";
import { useLatestUrl } from "../hooks/useLatestUrl";

export function HomeScreen() {
  const data = useLatestUrl();
  const { height, width } = Dimensions.get('window');
  return (
    <>
      {data.isLoading ?
        <View
          style={{ justifyContent: 'center', alignItems: 'center', height, width }}>
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
