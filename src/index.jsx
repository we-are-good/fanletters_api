import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./router/Router";
import { Provider } from "react-redux";
import store from "./redux/config/consfigStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Home />
        <GlobalStyle />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
