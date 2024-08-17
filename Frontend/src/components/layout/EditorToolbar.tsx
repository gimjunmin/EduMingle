// EditorToolbar.tsx
import EssayPin from "../CustomButtons/EssayPin";
import React from "react";
import Link from "next/link";

interface EditorToolbarProps {
    toggleSidebar: () => void;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ toggleSidebar }) => {
    return (
        <div className="flex flex-row justify-between">
            <Link
                href={'/dashboard/'}
                className="font-bold text-lg flex justify-center items-center ml-12"
            >Home</Link>
            <div className="flex flex-row justify-end gap-5 mr-12 my-4">
                <div className="flex justify-center items-center">
                    <EssayPin />
                </div>
                <button className="bg-sub2 font-bold text-white rounded-lg px-4 py-2">새 드래프트</button>
                <button onClick={toggleSidebar} className="border-sub2 border-2 font-bold text-sub2 rounded-lg px-4 py-2 focus:border-point1 focus:text-point1">드래프트 목록</button>
            </div>
        </div>
    );
}

export default EditorToolbar;
