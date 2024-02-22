import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify/dist/components";
import Login from "./pages/Login";
import store from "./redux/config/consfigStore";
import reportWebVitals from "./reportWebVitals";
import Router from "./router/Router";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Login />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
