import { configureStore } from "@reduxjs/toolkit";
import { signUpSliceReducer } from "./signUp/signUpSlice";
import { signInSliceReducer } from "./signIn/signInSlice";
const store = configureStore({
  reducer: {
    userSignUp: signUpSliceReducer,
    userSignIn: signInSliceReducer
  }
});
export default store;