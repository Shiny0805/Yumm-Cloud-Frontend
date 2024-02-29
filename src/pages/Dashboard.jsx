import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { notify } from "utils/toastHelper";
import './style.css';
import { WalletConnect } from "components/UI/ConnectButton";
import ControlsModal from "components/ControlsModal";
import GalleryModal from "components/GalleryModal";
import AboutModal from "components/AboutModal";
import useControls from "hooks/useControls";
import useGallery from "hooks/useGallery";
import useAbout from "hooks/useAbout";

export default function Dashboard() {
  const { address } = useAccount();
  const { openControlsModal } = useControls();
  const { openGalleryModal } = useGallery();
  const { openAboutModal } = useAbout();

  return (
    <div className="dashboard"
      style={{ 
        backgroundImage: `url("/assets/YummCloud/Main/main.jpeg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '832px'
      }}
    >
      <div className="connect_wallet">
        <div className="connect_wallet_field">
          <WalletConnect className="connect_wallet_text" />
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: 85 }}>
        <span className="dashboard_title">
          Eat to not get eaten
        </span>
      </div>

      <div class="container m-auto flex justify-around items-center">
        <div className="main_menu">
          <div class="flex justify-center py-7">
            <img src="/assets/YummCloud/Main/main_menu_title.png" alt="main_menu_title" />
          </div>

          <div class="flex justify-center py-0.5 cursor-pointer	">
            <img src="/assets/YummCloud/Main/play.png" alt="play" />
          </div>

          <div class="flex justify-center py-0.5 cursor-pointer" onClick={openControlsModal}>
            <img src="/assets/YummCloud/Main/control.png" alt="control" />
          </div>

          <div class="flex justify-center py-0.5 cursor-pointer" onClick={openGalleryModal}>
            <img src="/assets/YummCloud/Main/gallery.png" alt="gellery" />
          </div>

          <div class="flex justify-center py-0.5 cursor-pointer" onClick={openAboutModal}>
            <img src="/assets/YummCloud/Main/about.png" alt="about" />
          </div>
        </div>

        <div class="align-middle flex flex-col items-center">
          <div class="flex jusity-evenly items-center py-7">
            <div class="pr-3 cursor-pointer">
              <img src="/assets/YummCloud/Main/triangle_left.png" alt="triangle_left" />
            </div>
            <div>
              <img src="/assets/YummCloud/Main/frame.png" alt="frame" />
            </div>
            <div class="pl-3 cursor-pointer">
              <img src="/assets/YummCloud/Main/triangle_right.png" alt="triangle_right" />
            </div>
          </div>

          <div class="cursor-pointer">
            <img src="/assets/YummCloud/Main/select_avatar.png" alt="select_avatar" />
          </div>
        </div>

      </div>

      <ControlsModal />
      <GalleryModal />
      <AboutModal />
    </div>
    
  );
}
