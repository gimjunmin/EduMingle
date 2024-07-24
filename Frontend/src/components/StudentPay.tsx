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
    <div className="flex gap-3 items-start mb-4">
      <div className="text-left w-1/4 whitespace-nowrap">{name}</div>
      <div className="text-left w-1/4 text-sub2 whitespace-nowrap">{amount}</div>
      <div className="text-left w-1/4 whitespace-nowrap">{date}</div>
      <div className="text-left w-1/4 whitespace-nowrap overflow-x-auto">{paymentMethod}</div>
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
        <h1 className="font-bold text-lg">정산내역</h1>
        <div className="grid grid-cols-4 mt-5 items-center">
          <span className="font-semibold text-sm text-left">송금대상</span>
          <span className="font-semibold text-sm text-left">비용</span>
          <span className="font-semibold text-sm text-left">날짜</span>
          <span className="font-semibold text-sm text-left">결제수단</span>
        </div>
        <div className="border-y divide-y divide-solid mt-3 border-y-gray-2">
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
        <h1 className="font-bold text-lg">대기중인 정산 내역</h1>
        <div className="grid justify-center items-center bg-gray-100 rounded-md" style={{ width: '473px', height: '388px' }}>
          <div>
            <div className="grid grid-cols-3 bg-white border-gray-200 rounded my-6 items-center" style={{ width: '432px' }}>
              <div className="relative w-16 h-16">
                <Image src="/images/jpgs/test.JPG" width={64} height={64} objectFit="contain" alt="profileimg" className="rounded-full" />
              </div>
              <div className="flex flex-col justify-center">
                <div>36,000원</div>
                <div>Dongmin Jang</div>
                <div className="whitespace-nowrap">Why Do Birds Suddenly Appear</div>
              </div>
              <div className="flex items-center justify-end">
                2023.11.11
              </div>
            </div>
            <div className="bg-white border-gray-200 rounded my-6" style={{ width: '432px', height: '100px' }}>2</div>
            <div className="bg-white border-gray-200 rounded my-6" style={{ width: '432px', height: '100px' }}>3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
