import axios from "../services";
import {createSlice} from "@reduxjs/toolkit"
const initialState = {
  signUp: [],
  otp:null,
  verifyOtp:null,
  loading: false,
  error: null,
};

export const userSignUp = (name,email,password) => async(dispatch) => {
    dispatch(userSignUpLoading());
    try {
      const response = await axios.post("/signUp",{
        name,
        email,
        password
      });
      dispatch(setUserSignUpSuccess(response.data));
      return response;
    } catch (error) {
      console.log("Error in sign up", error);
      dispatch(setUserSignUpFailure(error.message));
      return error;
    }};


export const sendOtp = (userId) => async (dispatch) => {
    dispatch(otpLoading());
    try {
      const response = await axios.post("/sendOtp",{
        userId
      });
      console.log("🚀 ~ file: signUpPage.js:7 ~ userSignUp ~ response:",response.data);
      dispatch(setOtpSuccess(response.data));
      return response;
    } catch (error) {
      console.log("Error in sign up", error);
      dispatch(setOtpFailure());
    }};

    export const verifyOtp = (otp) => async (dispatch) => {
      dispatch(verifyOtpLoading());
      try {
        const response = await axios.post("/checkOtpVerify",{
          otp
        });
        console.log("🚀 ~ file: signUpPage.js:7 ~ userSignUp ~ response:",response.data);
        dispatch(setVerifyOtpSuccess(response.data));
        return response;
      } catch (error) {
        console.log("Error in sign up", error);
        dispatch(setVerifyOtpFailure());
        return error;
      }};
  

const signUpSlice = createSlice({
  name: "userSignUp",
  initialState,
  reducers: {
    userSignUpLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserSignUpSuccess: (state, action) => {
      state.signUp = action.payload;
      state.loading = false;
      state.error = null;
    },
    setUserSignUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    otpLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setOtpSuccess: (state, action) => {
      state.otp = action.payload;
      state.loading = false;
      state.error = null;
    },
    setOtpFailure: (state, action) => {
      state.loading = false;
      state.error = null;
    },
    verifyOtpLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setVerifyOtpSuccess: (state, action) => {
      state.verifyOtp = action.payload;
      state.loading = false;
      state.error = null;
    },
    setVerifyOtpFailure: (state, action) => {
      state.loading = false;
      state.error = null;
    },
  },
});
export const { 
  userSignUpLoading, 
  setUserSignUpSuccess, 
  setUserSignUpFailure,
  otpLoading, 
  setOtpSuccess, 
  setOtpFailure,
  verifyOtpLoading, 
  setVerifyOtpSuccess, 
  setVerifyOtpFailure,
 } =signUpSlice.actions;
export const signUpSliceReducer = signUpSlice.reducer;
