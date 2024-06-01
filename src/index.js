import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Provider>,
>>>>>>> c8acf18405246cb270e3b923faa4ba8391cdf422
  document.getElementById("root")
);
