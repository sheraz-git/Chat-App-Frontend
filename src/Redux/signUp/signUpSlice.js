import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  signUp: [],
  email:null,
  loading: false,
  error: null,
};
const signUpSlice = createSlice({
    name: "userSignUp",
    initialState,
    reducers: {
      userSignUpLoading: (state) => {
        state.loading = true;
        state.error = null;
      },
      userSignUpSuccess: (state, action) => {
        state.signUp = action.payload;
        state.loading = false;
        state.error = null;
      },
      userSignUpFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      emailLoading: (state) => {
        state.loading = true;
        state.error = null;
      },
      emailSuccess: (state, action) => {
        state.email = action.payload;
        state.loading = false;
        state.error = null;
      },
      emailFailure: (state, action) => {
        state.loading = false;
        state.error = null;
      },
    },
  });
  export const { 
    userSignUpLoading,
    userSignUpSuccess,
    userSignUpFailure,
    emailLoading,
    emailSuccess,
    emailFailure,
    // verifyOtpLoading,
    // verifyOtpSuccess,
    // verifyOtpFailure,
   } =signUpSlice.actions;

  export const signUpSliceReducer = signUpSlice.reducer;