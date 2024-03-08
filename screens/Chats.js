import React, { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { COLORS, SIZES, icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const Chats = () => {
  const [search, setSearch] = useState();

  const renderContent = () => {
    return (
      <View>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={23} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <TextInput
              style={styles.searchInput}
              placeholder="Search contacts..."
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <Image
              source={icons.editPencil}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                tintColor: COLORS.gray,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <StatusBar hidden />
        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    height: 50,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    height: "100%",
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
  },
});

export default Chats;
