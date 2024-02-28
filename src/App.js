/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "App.css";
import { RouterProvider } from "react-router-dom";
import PageRouter from "router";
import Layouts from "layouts";
import { ControlsProvider } from "context/ControlsContext";

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <ControlsProvider>
      <Layouts>
        <RouterProvider router={PageRouter} />
      </Layouts>
    </ControlsProvider>
    
  );
}

export default App;
