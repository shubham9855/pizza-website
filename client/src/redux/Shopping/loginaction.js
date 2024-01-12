import { LOGOUT, SIGN_IN, SIGN_UP } from "./actiontypes";

export const signin = (formdata, history) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN, payload: formdata });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formdata, history) => async (dispatch) => {
  try {
    console.log("inside sign up action");
    console.log("inside sign up formdata", formdata);
    dispatch({ type: SIGN_UP, payload: formdata });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};
