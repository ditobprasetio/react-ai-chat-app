import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: () => ({
            body: {
                bgColor: "#1e1f23",
                color: "#d5d6da",
                width: "100vw",
                height: "100vh",
                padding: 20,
            },
        }),
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
