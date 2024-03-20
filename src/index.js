import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScoreProvider from "./Context/ScoreProvider";
import MusicProvider from "./Context/MusicProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MusicProvider>
        <ScoreProvider>
          <App />
        </ScoreProvider>
      </MusicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
