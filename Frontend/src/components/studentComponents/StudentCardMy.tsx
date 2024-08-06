import React from 'react';
import Image from 'next/image';

export default function StudentCardMy() {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-24 h-24 mt-16'>
        <Image
          src='/images/jpgs/test.JPG'
          alt='consultantimg'
          objectFit='cover'
          layout='fill'
          className='rounded-full'
        />
      </div>
      <div className='mt-6'>
        <Image
          src='/images/pngs/ConsultantTag.png'
          alt='consultanttag'
          width={96}
          height={26}
        />
      </div>
      <h2 className='text-xl font-semibold mt-4 text-'>Minsung Kim</h2>
      <p className='text-gray-4 pb-2'>Harvard University, Computer Science</p>
      <div className='grid grid-cols-3 gap-2 mt-4 mb-6'>
        <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center item-center py-1 w-[154px]">
          <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
            SKKU University
          </span>
        </div>
        <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center item-center py-1 w-[154px]">
          <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
            SKKU University
          </span>
        </div>
        <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center item-center py-1 w-[154px]">
          <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
            SKKU University
          </span>
        </div>
      </div>
    </div>
  );
} 5