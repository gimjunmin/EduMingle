import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <div className='shadow-lg flex justify-between items-center p-5'>
                <div className='text-2xl text-[#1366de] font-extrabold'>
                    EDUMINGLE
                </div>
                <div className="">
                    <Link href="/home" className="p-3 text-lg">HOME</Link>
                    <Link href="/dashboard" className="p-3 text-lg">DASHBOARD</Link>
                    <Link href="/consultant" className="p-3 text-lg">CONSULTANT</Link>
                    <Link href="/essay" className="p-3 text-lg">ESSAY</Link>
                </div>
                <div className="flex items-center">
                    <div className="pr-3">
                        John Doe
                    </div>
                    <div className="rounded-full h-10 w-10 bg-gray-500">
                    </div>
                </div>
            </div>
        </div>
    );
  }
  