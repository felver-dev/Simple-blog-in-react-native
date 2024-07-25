import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../store/posts/postSlice";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Modal from "./Modal";
import {
  selectModalState,
  setToFalse,
  setToTrue,
} from "../store/modal/modalSlice";
import EditPost from "./EditPost";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const isOpened = useSelector(selectModalState);
  const dispatch = useDispatch();
  const editRef = useRef(null);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: isOpened ? "#333" : "#eee",
                width: "90%",
                margin: "auto",
                marginBottom: 10,
                padding: 10,
                borderRadius: 8,
                gap: 10,
              }}
            >
              <View style={{ margin: 10 }}>
                <Text
                  style={{
                    color: isOpened ? "#fff" : "#333",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: isOpened ? "#fff" : "#333" }}>
                  {" "}
                  {item.description}{" "}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => dispatch(setToTrue(true))}>
                  <MaterialIcons
                    name="folder-delete"
                    size={26}
                    color="#881231"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => editRef.current?.open()}>
                  <FontAwesome name="edit" size={22} color="dodgerblue" />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />

      {isOpened ? (
        <Modal
          deletePost={() => dispatch(setToFalse(false))}
          closeModal={() => dispatch(setToFalse(false))}
        />
      ) : (
        ""
      )}

      <EditPost editRef={editRef} />
    </View>
  );
};

export default PostList;
