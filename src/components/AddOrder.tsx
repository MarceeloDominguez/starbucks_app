import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const { width } = Dimensions.get("window");

export default function AddOrder() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.wrapQuantity}>
        <TouchableOpacity
          style={styles.circle}
          activeOpacity={0.8}
          onPress={() => setNumber(number - 1)}
        >
          <Icon name="remove-outline" size={20} color="#f0f9f4" />
        </TouchableOpacity>
        <Text style={styles.textCircle}>{number}</Text>
        <TouchableOpacity
          style={styles.circle}
          activeOpacity={0.8}
          onPress={() => setNumber(number + 1)}
        >
          <Icon name="add-outline" size={20} color="#f0f9f4" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerButton} activeOpacity={0.8}>
        <Text style={styles.textButton}>Add to Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapQuantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: "#44976e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textCircle: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#202020",
  },
  containerButton: {
    height: 50,
    width: width * 0.4,
    backgroundColor: "#44976e",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#f0f9f4",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
});
