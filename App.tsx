import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#202020",
      }}
    >
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
