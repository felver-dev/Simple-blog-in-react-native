import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectModalState } from "../store/modal/modalSlice";

const CircleButton = ({ bottomTabRef }) => {
  const { height, width } = Dimensions.get("screen");
  const activePopUp = useSelector(selectModalState);

  return (
    <TouchableOpacity
      disabled={activePopUp ?? true}
      style={{
        position: "absolute",
        // top: height - 0.9 * height,
        top: 0.102 * height,
        right: width - 0.95 * width,
        backgroundColor: activePopUp ? "#aaa" : "dodgerblue",
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        zIndex: 1,
        elevation: 1,
      }}
      onPress={() => bottomTabRef.current?.open()}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          color: "#fafafa",
        }}
      >
        +
      </Text>
    </TouchableOpacity>
  );
};

export default CircleButton;
