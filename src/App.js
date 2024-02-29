/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "App.css";
import { RouterProvider } from "react-router-dom";
import PageRouter from "router";
import Layouts from "layouts";
import { ControlsProvider } from "context/ControlsContext";
import { GalleryProvider } from "context/GalleryContext";

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <ControlsProvider>
      <GalleryProvider>
        <Layouts>
          <RouterProvider router={PageRouter} />
        </Layouts>
      </GalleryProvider>
    </ControlsProvider>
    
  );
}

export default App;
