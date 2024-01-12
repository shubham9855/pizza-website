import { combineReducers } from "redux";
import productreducer from "./Shopping/productreducer";
import { cartreducer } from "./Shopping/cartreducer";
import { loginReducer } from "./Shopping/loginreducer";

const rootReducer = combineReducers({
  productreducer,
  cartreducer,
  loginReducer,
});

export default rootReducer;
