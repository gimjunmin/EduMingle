import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className='bg-black' style={{ height: '83px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="/images/pngs/logo.png" alt="logo" width={203} height={28.37} className="ml-44" />
        <Link href="/dashboard/" className="text-white bg-point2 text-base px-6 py-2.5 text-center rounded-lg mr-44" style={{width:'151px', height:'43px'}}>로그인/회원가입</Link>
      </div>
      <img
        src="/images/svgs/LandingPage.svg"
        alt='landingpage'
        className="w-full h-full"
      />
      </div>
  );
}
