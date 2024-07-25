import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import BottomSheet from "@devvie/bottom-sheet";
import { Entypo, Octicons } from "@expo/vector-icons";
import EmojiPicker from "rn-emoji-keyboard";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/posts/postSlice";

const AddPost = ({ bottomTabRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleSavePost = () => {
    if (inputs.title && inputs.description) {
      dispatch(addPost(inputs.title, inputs.description));
    }
    setInputs({});
  };

  const handlePick = (emojiObject) => {
    console.log(emojiObject);
  };

  const handleChange = (value, key) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <BottomSheet
        height={500}
        style={{
          backgroundColor: "#222",
          position: "relative",
        }}
        ref={bottomTabRef}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: -30,
            right: 10,
            borderRadius: 50,
          }}
        ></TouchableOpacity>
        <ScrollView>
          <View style={{ marginVertical: 30 }}>
            <TextInput
              style={{
                fontSize: 14,
                borderWidth: 0.5,
                borderColor: "#fafafa",
                padding: Platform.OS === "ios" ? 14 : 10,
                width: "80%",
                margin: "auto",
                borderRadius: 8,
                color: "#fafafa",
              }}
              placeholderTextColor="#fafafa"
              placeholder="Entrer le titre ..."
              value={inputs.title}
              onChangeText={(value) => handleChange(value, "title")}
            />
          </View>
          <View style={{ marginBottom: 30 }}>
            <View
              style={{
                color: "#fafafa",
                fontSize: 18,
                borderWidth: 0.5,
                borderColor: "#fafafa",
                padding: Platform.OS === "ios" ? 14 : 10,
                width: "80%",
                margin: "auto",
                borderRadius: 8,
              }}
            >
              <TouchableOpacity>
                <EmojiPicker
                  onEmojiSelected={handlePick}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                />
                <Entypo
                  style={{ marginBottom: 10 }}
                  name="emoji-happy"
                  size={18}
                  color="#fafafa"
                />
              </TouchableOpacity>
              <TextInput
                onChangeText={(value) => handleChange(value, "description")}
                value={inputs.description}
                scrollEnabled={true}
                style={{ color: "#fafafa" }}
                multiline
                placeholderTextColor="#fafafa"
                placeholder="Entrer le contenu ..."
              />
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleSavePost}
              style={{
                margin: "auto",
                backgroundColor: "dodgerblue",
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 20,
                width: "80%",
                borderRadius: 8,
                borderWidth: 0.5,
                borderColor: "dodgerblue",
              }}
            >
              <Text style={{ fontSize: 20, color: "#fafafa" }}>
                Enregistrer
              </Text>
              <Octicons name="device-mobile" size={18} color="#fafafa" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheet>
    </>
  );
};

export default AddPost;
