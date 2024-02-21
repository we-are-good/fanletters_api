import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/config/consfigStore";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Login />
        <GlobalStyle />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
