import React from 'react';
import exActData from '../../public/documents/exact.json';

export default function StudentOut() {
  return (
    <div className="mt-12 text-xl">
      <div className='ml-6'>교외활동</div>
      <div className='mt-6 w-full'>
        {exActData.exAct.map((activity, index) => (
          <div className='border-b-2 border-gray2' key={index}>
            <div className='mt-5 text-lg font-semibold text-gray5 mx-6'>{activity.name}</div>
            <div className='text-base text-gray5 mx-6'>{activity.period}</div>
            <div className='my-5 text-lg text-gray4 mx-6'>{activity.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
