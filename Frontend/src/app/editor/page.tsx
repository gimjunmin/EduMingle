// Editor.tsx
'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '../../components/layout/Header';
import EditorToolbar from '../../components/layout/EditorToolbar';
import EssaySidebar from '../../components/studentComponents/EssaySidebar';

const TextEditor = dynamic(() => import('../../components/Common/TextEditor'), { ssr: false });

const Editor: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Header />
            <div className='flex flex-row'>
                <div className='flex flex-col w-full'>
                    <EditorToolbar toggleSidebar={toggleSidebar} />
                    <div className={`transition-width duration-300 ${isSidebarOpen ? '' : 'w-full'}`}>
                        <TextEditor initialValue="에세이를 입력해주세요!" />
                    </div>
                </div>
                {isSidebarOpen && (
                    <div className="w-1/4 bg-[#EEEEEE]">
                        <EssaySidebar />
                    </div>
                )}
            </div>    
        </div>
    );
};

export default Editor;
