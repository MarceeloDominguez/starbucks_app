import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Icon {
  nameIcon: keyof typeof Feather.glyphMap;
  size: number;
  title: string;
}

const icons: Icon[] = [
  { nameIcon: "coffee", size: 16, title: "small" },
  { nameIcon: "coffee", size: 20, title: "medium" },
  { nameIcon: "coffee", size: 24, title: "big" },
  { nameIcon: "coffee", size: 28, title: "extrabig" },
];

export default function SizeOptions() {
  const [indexSelected, setindexSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titlePrimary}>Size Options</Text>
      <View style={styles.wrapIcons}>
        {icons.map((item, index) => (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={{ alignItems: "center" }}
            onPress={() => setindexSelected(index)}
          >
            <View
              style={[
                styles.circleIcon,
                {
                  backgroundColor:
                    indexSelected === index ? "#44976e" : "#f0f9f4",
                },
              ]}
            >
              <Feather
                name={item.nameIcon}
                size={item.size}
                color={indexSelected === index ? "#f0f9f4" : "#44976e"}
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titlePrimary: {
    fontSize: 14,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: "700",
    opacity: 0.5,
    letterSpacing: 0.4,
    color: "#202020",
  },
  wrapIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circleIcon: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#202020",
    textTransform: "capitalize",
  },
});
