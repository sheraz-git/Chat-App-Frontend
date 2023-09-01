import axios from "../services";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userlogin: [],
  otp: null,
  verifyOtp: null,
  loading: false,
  error: null,
};

export const userLogin = ( email, password ) =>
  async (waqas) => {
    waqas(userLoginLoading());

    try {
     
      const response = await axios.post("signIn", { email, password });
      waqas(setUserLoginSuccess(response.data));
      return response;
    } catch (err) {
      waqas(setUserloginFailure(err.message));
    }
  };

const loginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLoginLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setUserLoginSuccess: (state, action) => {
      state.signUp = action.payload;
      state.loading = false;
      state.error = null;
    },
    setUserloginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {

  setUserLoginSuccess,userLoginLoading,setUserloginFailure


  
} = loginSlice.actions;
export const loginSliceReducers = loginSlice.reducer;
