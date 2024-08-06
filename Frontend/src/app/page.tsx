'use client';

import React from "react";
import { useState } from "react";
import LoginModal from "../components/loginModal";

export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className='bg-black' style={{ height: '83px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="/images/pngs/logo.png" alt="logo" width={203} height={28.37} className="ml-44" />
        <button onClick={handleOpenModal} className="text-white bg-point2 text-base px-6 py-2.5 text-center rounded-lg mr-44" style={{width:'151px', height:'43px'}}>로그인/회원가입</button>
      </div>
      <img
        src="/images/svgs/LandingPage.svg"
        alt='landingpage'
        className="w-full h-full"
      />
      <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
