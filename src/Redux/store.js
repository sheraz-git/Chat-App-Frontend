import { configureStore } from "@reduxjs/toolkit";

import { signUpSliceReducer } from "./SignUp/signUpPage";

const store = configureStore({
  reducer: {
    userSignUp: signUpSliceReducer
  }
});

export default store;