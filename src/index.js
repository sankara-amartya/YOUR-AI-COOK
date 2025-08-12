import React from "react";
import { createRoot } from "react-dom/client";
import MainRouter from "./MainRouter";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<MainRouter />);
