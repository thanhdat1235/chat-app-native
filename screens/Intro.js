import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { COLORS, FONTS, SIZES, images } from "../constants";
import Button from "../components/Button";

const Intro = ({ navigation }) => {
  return (
    <ImageBackground source={images.background} style={{ flex: 1 }}>
      <StatusBar hidden />
      <View style={{ flex: 3, padding: 16, marginTop: 22 }}>
        <View style={styles.circleViewContainer}>
          <View
            style={[
              styles.circleView,
              {
                borderBottomStartRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}
          >
            <Image
              source={images.girl1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 17,
              }}
            />
          </View>
          <View style={styles.circleView}>
            <Image
              source={images.girl2}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 16,
              }}
            />
          </View>
        </View>
        <View style={styles.circleViewContainer}>
          <View style={styles.circleView}>
            <Image
              source={images.guy1}
              resizeMode="cover"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 17,
              }}
            />
          </View>
          <View
            style={[
              styles.circleView,
              {
                borderBottomEndRadius: 0,
                backgroundColor: COLORS.secondary,
              },
            ]}
          >
            <Image
              source={images.guy2}
              resizeMode="contain"
              style={{
                width: (SIZES.width - 32) / 2 - 8,
                height: (SIZES.width - 32) / 2 + 26,
                bottom: 7,
                left: 42,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Enjoy the new experience of chatting with global friends
        </Text>
        <Text style={styles.bottomSubtitle}>
          Connect people around the world for free
        </Text>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate("Welcome")}
          style={{
            marginVertical: 24,
            width: SIZES.width - 64,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "gray",
              fontFamily: "medium",
              marginRight: 5,
            }}
          >
            Power by
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.secondary,
              fontFamily: "semiBold",
            }}
          >
            USAGE
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    alignItems: "center",
    padding: 16,
  },

  bottomTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.black,
    textAlign: "center",
    margin: 16,
  },

  bottomSubtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    margin: 16,
  },

  circleViewContainer: {
    width: SIZES.width - 32,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  circleView: {
    width: (SIZES.width - 32) / 2 - 8,
    height: (SIZES.width - 32) / 2 - 8,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
});

export default Intro;
