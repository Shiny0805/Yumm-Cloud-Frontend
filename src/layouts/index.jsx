import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function index({ children }) {
  return (
    // <div class="h-screen m-auto">
    <div>
      {/* <Header /> */}
      <div>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
