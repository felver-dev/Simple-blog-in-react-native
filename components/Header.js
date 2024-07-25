import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  const { height, width } = Dimensions.get("screen");
  return (
    <View
      style={{
        width,
        height: 0.18 * height,
        zIndex: -999,
        elevation: 0,
        backgroundColor: "#222",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingTop: 0.102 * height,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          borderColor: "#fafafa",
          borderWidth: 0.5,
          alignItems: "flex-start",
          flexDirection: "row",
          width: "80%",
          borderRadius: 10,
          padding: 8,
        }}
      >
        <TouchableOpacity>
          <Feather name="search" size={24} color="#fafafa" />
        </TouchableOpacity>
        <TextInput
          style={{ color: "#fafafa", marginLeft: 5 }}
          placeholderTextColor="#fafafa"
          placeholder="Chercher un post ..."
        />
      </View>
    </View>
  );
};

export default Header;
