import React from 'react';
import Image from 'next/image';


interface PaymentItemProps {
  name: string;
  amount: string;
  date: string;
  paymentMethod: string;
}

function PaymentItem({ name, amount, date, paymentMethod }: PaymentItemProps) {
  return (
    <div className="flex gap-3 items-start">
      <div className="text-left w-1/4 whitespace-nowrap my-4">{name}</div>
      <div className="text-left w-1/4 text-sub2 whitespace-nowrap my-4">{amount}</div>
      <div className="text-left w-1/4 whitespace-nowrap my-4">{date}</div>
      <div className="text-left w-1/4 whitespace-nowrap overflow-x-auto my-4">{paymentMethod}</div>
    </div>
  );
}

export default function StudentPay() {
  const paymentHistory = [
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' },
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' },
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' },
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' },
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' },
    { name: 'Jihye Jeong', amount: '30,000원', date: '24.03.03', paymentMethod: '신한 3300-****-****-7676' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 gap-10">
      <div>
        <h1 className="font-bold text-lg text-gray5">정산내역</h1>
        <div className="grid grid-cols-4 mt-5 items-center mb-3">
          <span className="font-semibold text-sm text-left">송금대상</span>
          <span className="font-semibold text-sm text-left">비용</span>
          <span className="font-semibold text-sm text-left">날짜</span>
          <span className="font-semibold text-sm text-left">결제수단</span>
        </div>
        <div className="border-y divide-y divide-solid border-y-gray2 mb-5">
          {paymentHistory.map((payment, index) => (
            <PaymentItem
              key={index}
              name={payment.name}
              amount={payment.amount}
              date={payment.date}
              paymentMethod={payment.paymentMethod}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg mb-5 text-gray5">대기중인 정산 내역</h1>
        <div className="grid gird-cols-3 justify-center box-sizing-border items-center bg-gray-100 rounded-md mb-0" style={{ width: '473px', height: '388px'}}>
          <div className='mt-auto'>
            <div className="flex flex-row bg-white border-gray2 border-2 rounded-lg items-center" style={{ width: '432px', height: '100px' }}>
              <div className="relative w-14 h-14 ml-4 mr-4">
                <Image src="/images/jpgs/test.JPG" objectFit="cover" layout='fill' alt="profileimg" className="rounded-full" />
              </div>
              <div className="flex flex-col box-sizing flex-1">
                <div className="inline-block self-start break-words font-bold text-lg text-point2">36,000원</div>
                <div className='text-sm text-[#7C7C7C]'>Dongmin Jang</div>
                <div className="whitespace-nowrap text-sm text-[#A3A3A3]">Why Do Birds Suddenly Appear</div>
              </div>
              <div className="inline-block break-words font-semibold text-[13px] text-[#7C7C7C] self-start mt-3.5 mr-4">
                2023.11.11
              </div>
            </div>
          </div>
          <div className='my-4'>
            <div className="flex flex-row bg-white border-gray2 border-2 rounded-lg items-center" style={{ width: '432px', height: '100px' }}>
              <div className="relative w-14 h-14 ml-4 mr-4">
                <Image src="/images/jpgs/test.JPG" objectFit="cover" layout='fill' alt="profileimg" className="rounded-full" />
              </div>
              <div className="flex flex-col box-sizing flex-1">
                <div className="inline-block self-start break-words font-bold text-lg text-point2">36,000원</div>
                <div className='text-sm text-[#7C7C7C]'>Dongmin Jang</div>
                <div className="whitespace-nowrap text-sm text-[#A3A3A3]">Why Do Birds Suddenly Appear</div>
              </div>
              <div className="inline-block break-words font-semibold text-[13px] text-[#7C7C7C] self-start mt-3.5 mr-4">
                2023.11.11
              </div>
            </div>
          </div>
          <div className='mb-auto'>
            <div className="flex flex-row bg-white border-gray2 border-2 rounded-lg items-center" style={{ width: '432px', height: '100px' }}>
              <div className="relative w-14 h-14 ml-4 mr-4">
                <Image src="/images/jpgs/test.JPG" objectFit="cover" layout='fill' alt="profileimg" className="rounded-full" />
              </div>
              <div className="flex flex-col box-sizing flex-1">
                <div className="inline-block self-start break-words font-bold text-lg text-point2">36,000원</div>
                <div className='text-sm text-[#7C7C7C]'>Dongmin Jang</div>
                <div className="whitespace-nowrap text-sm text-[#A3A3A3]">Why Do Birds Suddenly Appear</div>
              </div>
              <div className="inline-block break-words font-semibold text-[13px] text-[#7C7C7C] self-start mt-3.5 mr-4">
                2023.11.11
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
