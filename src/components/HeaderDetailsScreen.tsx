import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Icon
        name="chevron-back-outline"
        size={28}
        color="#202020"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.title}>Details</Text>
      <Icon name="basket-outline" size={28} color="#202020" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});
