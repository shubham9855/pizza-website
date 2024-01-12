import { SIGN_UP, SIGN_IN, LOGOUT } from "./actiontypes";
const initialState = {
  islogin: false,
  users: [],
};

export const loginReducer = (state = initialState, action) => {
  console.log("inside login reducer");
  const user = action.payload;
  console.log(user);
  switch (action.type) {
    case SIGN_UP:
      console.log("inside sign up reducer");
      console.log("action payload", action.payload);
      return {
        ...state,
        islogin: true,
        users: [...state.users, user],
      };
    case SIGN_IN:
      return {
        ...state,
        islogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        islogin: false,
      };
    default:
      return state;
  }
};
