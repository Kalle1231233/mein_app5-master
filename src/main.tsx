import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Router } from "wouter";
import "./index.css";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router base={base}>
            <App />
        </Router>
    </React.StrictMode>
);
