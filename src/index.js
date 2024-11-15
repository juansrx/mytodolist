import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Square() {
    return <button className="square">X</button>;
  }
  

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Square />
  </StrictMode>
);