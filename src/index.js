import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Container/App";
import registerServiceWorker from "./registerServiceWorker";

import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import authReducer from "./Store/Reducers/auth";
import chatReducer from "./Store/Reducers/chat";

const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  chat: chatReducer
});

const store = createStore(
  rootReducers,
  ComposeEnhancer(applyMiddleware(thunk))
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
