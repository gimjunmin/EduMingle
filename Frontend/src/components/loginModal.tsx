'use client';
import React, { useState } from "react";
import Image from "next/image";


const LoginModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    if (!isOpen) return null;

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleBackToLogin = () => {
        setIsSignUp(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="flex rounded-md shadow-md bg-white relative" style={{ width: '994px', height: '700px' }}>
                {isSignUp ? (
                    <SignUpModal onBack={handleBackToLogin} />
                ) : (
                    <>
                        <button onClick={onClose} className="absolute top-4 right-5 text-red-500 text-lg">X</button>
                        <Image src='/images/svgs/loginImg.svg' alt="loginImg" width={410} height={700} />
                        <div className="grid grid-rows-3 items-center" style={{ width: '584px', height: '700px' }}>
                            <div className="flex flex-col items-center justify-center h-full">
                                <Image src={'/images/svgs/logo.svg'} alt="logo" width={46} height={46} />
                                <div className="mt-5 mb-2 text-xl">Edumingle</div>
                                <div className="text-base text-[#717171]">Welcome back to Edumingle</div>
                            </div>
                            <div className="flex flex-col">
                                <div className="text-base ml-[100px] text-[#717171] font-bold">Email</div>
                                <div className="flex">
                                    <input type="text" className="w-full ml-[100px] h-10 border border-gray2 rounded-lg" style={{ width: '380px', height: '40px' }} />
                                </div>
                                <div className="flex text-base ml-[100px] mt-[27px] text-[#717171] font-bold">Password</div>
                                <div className="flex">
                                    <input type="password" className="w-full ml-[100px] h-10 border border-gray2 rounded-lg" style={{ width: '380px', height: '40px' }} />
                                </div>
                                <button className="flex text-sm ml-[350px] text-sub2 mt-[12px]">비밀번호를 잊으셨나요?</button>
                            </div>
                            <div>
                                <button className="flex ml-[100px] mb-2 bg-sub1 rounded-md items-center justify-center text-white text-base" style={{ width: '380px', height: '48px' }}>로그인</button>
                                <button onClick={handleSignUpClick} className="flex ml-[100px] mb-10 border-sub1 border-2 rounded-md items-center justify-center text-sub1 text-base focus:border-sub2" style={{ width: '380px', height: '48px' }}>회원가입</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

const SignUpModal = ({ onBack }: { onBack: () => void }) => {
    return (
        <div className="flex rounded-md shadow-md" style={{ width: '994px', height: '700px' }}>
            <Image src='/images/svgs/loginImg.svg' alt="loginImg" width={410} height={700} />
            <div className="flex flex-col" style={{ width: '584px', height: '700px' }}>
                <div className="flex flex-col items-center justify-start h-full mt-[68px]">
                    <Image src={'/images/svgs/logo.svg'} alt="logo" width={46} height={46} />
                    <div className="mt-5 mb-2 text-xl">Edumingle</div>
                    <div className="text-base text-[#717171]">Welcome to Edumingle</div>
                    <div className="flex gap-4 justify-center mt-[50px]">
                        <button className="bg-[#E9E9E9] rounded-md border-[#C0C0C0] border-2 focus:bg-sub2 focus:border-none " style={{ width: '174px', height: '48px' }}>컨설턴트</button>
                        <button className="bg-[#E9E9E9] rounded-md border-[#C0C0C0] border-2 focus:bg-sub2 focus:border-none " style={{ width: '174px', height: '48px' }}>학생</button>
                    </div>
                    <div className="flex flex-col mt-[32px]">
                        <div className="text-base text-[#717171] font-bold">Email</div>
                        <div className="flex justify-center">
                            <input type="text" className="w-full h-10 border border-gray2 rounded-lg" style={{ width: '380px', height: '40px' }} />
                        </div>
                        <div className="flex text-base mt-[27px] text-[#717171] font-bold">Password</div>
                        <div className="flex justify-center">
                            <input type="password" className="w-full h-10 border border-gray2 rounded-lg" style={{ width: '380px', height: '40px' }} />
                        </div>
                        <button className="flex mb-10 mt-[95px] bg-sub1 rounded-md items-center justify-center text-white text-base" style={{ width: '380px', height: '48px' }}>회원가입</button>
                    </div>
                    <button onClick={onBack} className="absolute top-4 right-5 text-red-500 text-lg">뒤로</button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
