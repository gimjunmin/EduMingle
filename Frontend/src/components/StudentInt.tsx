import { useForm } from 'react-hook-form';
import React from 'react'
import sudentIntData from '../../public/documents/studentInt.json';

export default function StudentInt() {

  return (
    <div className='mt-14 w-full mb-8' style={{ height: '550px' }}>
      <h1 className='font-bold text-xl'>About</h1>
      <div>
        {sudentIntData.studentInt.map((studentInt, index) => (
          <div className='mt-4 text-base text-gray5 overflow-auto max-h-[200px]'>{studentInt.about}</div>
        ))}
      </div>
      <div>
        <h1 className='font-bold text-lg mt-16'>목표학교</h1>
        <div className='flex flex-row gap-3 mt-3'>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[154px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
              Harvard University
            </span>
          </div>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[140px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
              SKKU University
            </span>
          </div>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[90px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
              UCLA
            </span>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <h1 className='font-bold text-lg'>목표학과</h1>
        <div>
        {sudentIntData.studentInt.map((studentInt, index) => (
          <div className='mt-4 text-base text-gray5 overflow-auto max-h-[200px]'>{studentInt.major}</div>
        ))}
      </div>
      </div>
      <div className='mt-16'>
        <h1 className='font-bold text-lg'>미래계획</h1>
        <div>
        {sudentIntData.studentInt.map((studentInt, index) => (
          <div className='mt-4  text-base text-gray5  overflow-auto max-h-[200px]'>{studentInt.future}</div>
        ))}
      </div>
      </div>
    </div>
  );
};
