import { configureStore } from "@reduxjs/toolkit";

import { signUpSliceReducer } from "./SignUp/signUpPage";
import { loginSliceReducers } from "./Userlogin/UserLogin";

const store = configureStore({
  reducer: {
    userSignUp: signUpSliceReducer,
    userLogin: loginSliceReducers
  }
});

export default store;