import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

// Action Creators

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    history.push("/");
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    history.push("/");
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
