import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  signIn: null,
  loading: false,
  error: null,
};
const signInSlice = createSlice({
    name: "userSignIn",
    initialState,
    reducers: {
      userSignInLoading: (state) => {
        state.loading = true;
        state.error = null;
      },
      userSignInSuccess: (state, action) => {
        state.signIn = action.payload;
        state.loading = false;
        state.error = null;
      },
      userSignInFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  export const { 
    userSignInLoading,
    userSignInSuccess,
    userSignInFailure,
   } =signInSlice.actions;

  export const signInSliceReducer = signInSlice.reducer;