import axios from "../services";
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login: []
}
    export const login = async (body) => {
        try {
            const response = await axios.post("signIn", body);
            return response;
        } catch (err) {
            return err.response
        }
    };




    const loginSlice = createSlice({
        name: "userLogin",
        initialState,
        reducers: {
          userSignUpLoading: (state) => {
            state.loading = true;
            state.error = null;
          }
        
        },
      });