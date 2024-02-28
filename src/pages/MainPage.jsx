import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function MainPage() {

  const gotoDashboard = () => {
    window.location.href = "/main";
  }

  return (
    <div class="max-w-screen-xl m-auto">
      <div className="flex relative">
        <div class="h-screen cursor-pointer" onClick={gotoDashboard}>
          <div class="relative">
            <img src="/assets/YummCloud/MainLayout/lhs_gate.png" alt="lhs_gate" />
          </div>
          <img src="/assets/YummCloud/MainLayout/rhs_gate.png" alt="rhs_gate" class="absolute right-0 top-0" />
        </div>
      </div>
    </div>
    
    
    // <div class="cursor-pointer relative w-1280 h-832">
    //     <div class="w-731px h-832px absolute left-[555px!important] top-0">
    //         <img src="/assets/YummCloud/MainLayout/rhs_gate.png" alt="rhs_gate" />
    //     </div>

    //     <div class="w-845 h-832">
    //         <img src="/assets/YummCloud/MainLayout/lhs_gate.png" alt="lhs_gate" class="w-845 h-832" />
    //     </div>
    // </div>
  );
}
