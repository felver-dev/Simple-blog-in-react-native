import {
  View,
  Text,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Modal = ({ closeModal, deletePost }) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <View
      style={{
        position: "absolute",
        height: 0.22 * height,
        top: "50%",
        left: "10%",
        width: "80%",
        backgroundColor: "#fff",
        opacity:.98,
        borderRadius: 8,
      }}
    >
      <View style={{ width: width - 0.3 * width, margin: "auto" }}>
        <Pressable>
          <Entypo name="circle-with-cross" size={30} color="#881231" />
        </Pressable>
        <Text> Voulez-vous vraiment supprimer le post ? 🫣 </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={closeModal}
            style={{
              backgroundColor: "dodgerblue",
              padding: 10,
              width: 110,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#fafafa", textAlign: "center" }}>
              Annuler 🤪
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={deletePost}
            style={{
              backgroundColor: "#881231",
              padding: 10,
              width: 112,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#fafafa", textAlign: "center" }}>
              Supprimer 😞
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Modal;
