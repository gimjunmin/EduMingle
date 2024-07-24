import React from 'react'
import { useForm } from 'react-hook-form';



export default function StudentGrade() {
  const { register, formState: { errors } } = useForm();
  
  return (
    <div className='mt-16 w-full mb-8' style={{ height: '550px' }}>
      <h1 className='font-bold text-xl'>교내 내신 추이</h1>
      <form>
        <textarea
          {...register('introduction', { required: true, maxLength: 500 })}
          className='textarea textarea-bordered rounded w-full h-52 bg-slate-100 text-gray-400 focus:text-gray-800 placeholder-gray-400'
          placeholder=''

        ></textarea>
        {/* {errors.introduction && (
          <span>This field is required and must be less than 500 characters.</span>
        )} */}
      </form>
    </div>
  )
}
