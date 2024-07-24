import { useForm } from 'react-hook-form';
import React from 'react'

export default function StudentInt() {
  const { register, formState: { errors } } = useForm();

  return (
    <div className='mt-16 w-full mb-8' style={{ height: '550px' }}>
      <h1 className='font-bold text-xl'>About</h1>
      <form>
        <textarea
          {...register('introduction', { required: true, maxLength: 500 })}
          className='textarea textarea-bordered rounded bg-slate-100 w-full h-24 text-gray-400 focus:text-gray-800 placeholder-gray-400'
          placeholder='Tell us about yourself...'

        ></textarea>
        {/* {errors.introduction && (
          <span>This field is required and must be less than 500 characters.</span>
        )} */}
      </form>
      <div>
        <h1 className='font-bold text-xl'>목표학교</h1>
        <div className='flex flex-row gap-3 mt-3'>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[154px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray4">
              Harvard University
            </span>
          </div>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[140px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray-4">
              SKKU University
            </span>
          </div>
          <div className="rounded-[29px] border-2 border-gray-3 bg-[#F4F6F7] flex justify-center items-center py-1 w-[90px]">
            <span className="break-words font-['Pretendard_Variable','Roboto_Condensed'] font-medium text-[15px] text-gray-4">
              UCLA
            </span>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <h1 className='font-bold text-xl'>목표학과</h1>
        <form>
          <textarea
          className='textarea textarea-bordered w-full h-10 rounded bg-slate-100 text-gray-400 focus:text-gray-800 placeholder-gray-400'
          placeholder='Please write the department you are aiming for...'
          ></textarea>
        </form>
      </div>
      <div className='mt-16'>
        <h1 className='font-bold text-xl'>미래계획</h1>
        <form>
          <textarea
          className='textarea textarea-bordered w-full h-32 rounded bg-slate-100 text-gray-400 focus:text-gray-800 placeholder-gray-400'
          placeholder='Please write your future plans...'
          ></textarea>
        </form>
      </div>
    </div>
  );
};
