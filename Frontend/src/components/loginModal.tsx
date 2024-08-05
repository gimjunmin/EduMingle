import Image from "next/image";

export default function loginModal() {
    return (
        <div className="flex" style={{width: '994px', height:'700px'}}>
            <Image src='/images/svgs/loginImg.svg' alt="loginImg" width={410} height={700}/>
            <div className="grid grid-rows-3 " style={{ width: '584px', height: '700px' }}>
                <div className="flex flex-col items-center justify-center h-full">
                    <Image src={'/images/svgs/logo.svg'} alt="logo" width={46} height={46} />
                    <div className="mt-5 mb-2 text-xl">Edumingle</div>
                    <div className="text-base text-[#717171]">Welcome back to Edumingle</div>
                </div>
                <div>
                    <div>Email</div>
                    <input type="text" className="w-full h-10 border border-[#DEE3E6] rounded-lg mt-2" />
                    <div>Password</div>
                    <input type="password" className="w-full h-10 border border-[#DEE3E6] rounded-lg mt-2" />
                    <div>비밀번호를 잊으셨나요?</div>
                </div>
            </div>
        </div>
    );
}