import axios from "../services";
import {
  userSignUpLoading,
  userSignUpSuccess,
  userSignUpFailure,
  emailLoading,
  emailSuccess,
  emailFailure,
} from "./signUpSlice";

export const userSignUp = (name,email,password) => async(dispatch) => {
    dispatch(userSignUpLoading());
    try {
      const response = await axios.post("/signUp",{
        name,
        email,
        password
      });
      dispatch(userSignUpSuccess(response.data));
      return response;
    } catch (error) {
      console.log("Error in sign up", error);
      dispatch(userSignUpFailure(error.message));
    return error;
    }};

    export const sendEmail = (email) => async (dispatch) => {
      dispatch(emailLoading());
      try {
        const response = await axios.post("/forUserEmail",{
          email
        });
        console.log("🚀 ~ file: signUpPage.js:7 ~ userSignUp ~ response:",response.data);
        dispatch(emailSuccess(response.data));
        return response;
      } catch (error) {
        console.log("Error in sign up", error);
        dispatch(emailFailure());
        return error;
      }};
