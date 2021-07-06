import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import movieReducer from "../features/movieSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
export default store;
