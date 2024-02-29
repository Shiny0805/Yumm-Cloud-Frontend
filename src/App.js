/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "App.css";
import { RouterProvider } from "react-router-dom";
import PageRouter from "router";
import Layouts from "layouts";
import { ControlsProvider } from "context/ControlsContext";
import { GalleryProvider } from "context/GalleryContext";
import { AboutProvider } from "context/AboutContext";
import { MintProvider } from "context/MintContext";

import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <ControlsProvider>
      <GalleryProvider>
        <AboutProvider>
          <MintProvider>
            <Layouts>
              <RouterProvider router={PageRouter} />
            </Layouts>
          </MintProvider>
        </AboutProvider>
      </GalleryProvider>
    </ControlsProvider>
    
  );
}

export default App;
