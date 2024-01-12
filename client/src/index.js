import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Auth0Provider } from "@auth0/auth0-react";

import { createStore, applyMiddleware, compose } from "redux";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
      compose
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-2dkasew758rq6rrl.us.auth0.com"
      clientId="1lNmo7LE1jW4nIAb2exxl7hoBdSBW6DR"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
 