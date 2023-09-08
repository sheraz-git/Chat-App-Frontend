import axios from "../services";
import {
  userSignInLoading,
  userSignInSuccess,
  userSignInFailure,
} from "./signInSlice";
export const userSignIn = (email,password) => async(dispatch) => {
    dispatch(userSignInLoading());
    try {
      const response = await axios.post("/signIn",{
        email,
        password
      });
      dispatch(userSignInSuccess(response.data));
      return response;
    } catch (error) {
      console.log("Error in sign up", error);
      dispatch(userSignInFailure(error.message));
      return error;
    }};