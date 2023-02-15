import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { images } from "../constants/data";

const { width, height } = Dimensions.get("window");

const ITEM_SIZE = width * 0.55;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;

interface Data {
  image: ImageSourcePropType;
  category: string;
  avatarCategory: string;
  title: string;
  price: number;
}

export default function HomeScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const [dataLocal, setDataLocal] = useState<Data[]>([
    { key: "left-spacer" } as any,
    ...images,
    { key: "right-spacer" },
  ]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          position: "absolute",
          top: height >= 600 ? 50 : 10,
          left: 35,
          fontSize: 35,
          width: height >= 600 ? width * 0.6 : width * 0.7,
          fontWeight: "bold",
        }}
      >
        Smooth Out Your Everyday
      </Text>
      <View style={styles.circleScreen} />
      <View>
        <View style={styles.pagination}>
          {images.map((item, i) => {
            return (
              <View key={i} style={styles.containerCirclesCategory}>
                <View
                  style={{
                    bottom: i === 1 || i === 2 ? 22 : -20,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={[
                      styles.dot,
                      {
                        backgroundColor: index === i ? "#91b8a3" : "#fff",
                      },
                    ]}
                  >
                    <Image
                      source={item.avatarCategory}
                      style={styles.imageCategory}
                      resizeMode="contain"
                    />
                  </View>
                  <Text
                    style={[
                      styles.nameCategory,
                      {
                        color: index === i ? "#91b8a3" : "#fff",
                      },
                    ]}
                  >
                    {item.category}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <View>
        <Animated.FlatList
          data={dataLocal}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_SIZE}
          decelerationRate={0}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            if (!item.image) {
              return <View style={styles.spaceNoImage} />;
            }

            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];

            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [0, -50, 0],
            });

            return (
              <Animated.View
                style={[styles.containerImage, { transform: [{ translateY }] }]}
              >
                <TouchableOpacity
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Image
                    source={item.image}
                    style={[styles.image]}
                    resizeMode="contain"
                  />
                  <View style={styles.circleImageCarousel} />
                </TouchableOpacity>
                <View
                  style={{
                    position: "absolute",
                    bottom: height >= 600 ? 20 : -20,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      letterSpacing: 0.5,
                      color: "rgb(232,226,210)",
                      width: 120,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      marginTop: 2,
                      fontSize: 15,
                      color: "rgb(232,226,210)",
                      fontWeight: "bold",
                    }}
                  >
                    ${item.price}
                  </Text>
                </View>
              </Animated.View>
            );
          }}
          onMomentumScrollEnd={(e) => {
            setIndex(Math.round(e.nativeEvent.contentOffset.x / ITEM_SIZE));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  circleScreen: {
    backgroundColor: "#44976e",
    width: 700,
    height: 700,
    borderRadius: 350,
    top: height >= 600 ? 550 : 560,
    alignSelf: "center",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 22,
    zIndex: 1,
  },
  containerCirclesCategory: {
    alignItems: "center",
    flex: 1,
  },
  dot: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  imageCategory: {
    width: 40,
    height: 40,
  },
  nameCategory: {
    marginTop: 2,
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  spaceNoImage: {
    width: SPACER_ITEM_SIZE,
  },
  containerImage: {
    backgroundColor: "#44976e",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height >= 600 ? 20 : 0,
  },
  image: {
    width: ITEM_SIZE,
    height: height * 0.47,
    zIndex: 1,
  },
  circleImageCarousel: {
    width: height >= 600 ? 210 : 180,
    height: height >= 600 ? 210 : 180,
    backgroundColor: "#91b8a3",
    position: "absolute",
    borderRadius: height >= 600 ? 105 : 90,
    bottom: height >= 600 ? 90 : 45,
  },
});
