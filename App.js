import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions, SafeAreaView } from "react-native";
import AddPost from "./components/AddPost";
import { useRef } from "react";
import CircleButton from "./components/CircleButton";
import PostList from "./components/PostList";
import Header from "./components/Header"

export default function App() {
  const bottomTabRef = useRef(null);
  const { height, width } = Dimensions.get("screen");


  return (
    <View style={styles.container(height)}>
      <SafeAreaView />
      <StatusBar style="light" />
      <Header />
      <CircleButton bottomTabRef={bottomTabRef} />
      <PostList />
      <AddPost bottomTabRef={bottomTabRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (height) => ({
    flex: 1,
    // paddingTop: height - 0.82 * height,
    backgroundColor: "#222",
  }),
});
