'use client'

import { useState } from "react"
import StudentInt from "./StudentInt";
import StudentOut from "./StudentOut";
import StudentGrade from "./StudentGrade";
import StudentPay from "./StudentPay";

export default function StudentTabMy() {
    const [tab, setTab] = useState('학생소개');
    const tabs = ['기본정보', '교외활동', '성적추이', '정산내역'];
    return (
        <div>
            <div className="flex justify-center items-center mt-4">
                {tabs.map((element) => (
                    <button
                        key={element}
                        className={`py-2 px-4 focus:outline-none ${tab === element ? 'border-b-4 border-point1' : ''
                            }`}
                        onClick={() => setTab(element)}
                    >
                        {element}
                    </button>
                ))}
            </div>
            <div>
                {tab === '기본정보' && <StudentInt />}
                {tab === '교외활동' && <StudentOut />}
                {tab === '성적추이' && <StudentGrade />}
                {tab === '정산내역' && <StudentPay />}
            </div>
        </div>
    )
};

