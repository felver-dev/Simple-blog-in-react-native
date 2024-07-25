import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "First Post",
    description: "description of the first post and make it a bit longer",
  },
  {
    id: 2,
    title: "Second Post",
    description: "description of the second post",
  },
  {
    id: 3,
    title: "Third Post",
    description: "description of the third post",
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, description) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
          },
        };
      },
    },

    updatePost: (state, action) => {
      const { id, title, description } = action.payload;
      const existingPost = state.find((post) => post.id === id);

      if (existingPost) {
        (existingPost.title = title), (existingPost.description = description);
      }
    },

    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
