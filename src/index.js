import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import "./styles/index.css";
import App from "./App";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reducer } from "./reducers/reducers";
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Provider>
);
