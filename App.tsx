import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
  },
});
