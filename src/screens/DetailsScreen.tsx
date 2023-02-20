import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { RootStackParams } from "../navigation/Navigation";
import HeaderDetailsScreen from "../components/HeaderDetailsScreen";
import SizeOptions from "../components/SizeOptions";
import AddOrder from "../components/AddOrder";

interface Props
  extends NativeStackScreenProps<RootStackParams, "DetailsScreen"> {}

const { height, width } = Dimensions.get("window");

export default function DetailsScreen({ route }: Props) {
  const { title, price, image } = route.params;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderDetailsScreen />

      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.wrapTitlePrice}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>

      <SizeOptions />
      <AddOrder />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.47,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  containerImage: {
    width: width * 0.6,
    height: height * 0.3,
    backgroundColor: "#44976e",
    alignItems: "center",
    borderRadius: width * 0.3,
  },
  image: {
    width: width * 0.8,
    height: height * 0.5,
    top: -160,
  },
  wrapTitlePrice: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#202020",
    fontWeight: "bold",
    letterSpacing: 0.5,
    width: 150,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "#44976e",
  },
});
