import { createRoot } from 'react-dom/client';
import { App } from "./core";
import {createGlobalStyle} from "styled-components";
import {Provider} from "react-redux";
import {configuredStore} from "./redux";
import { BrowserRouter } from "react-router-dom";

const store = configuredStore()

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #2e2e2e;
  }
`

const container  = document.getElementById('root')
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <GlobalStyle />
            <App />
        </Provider>
    </BrowserRouter>
);

