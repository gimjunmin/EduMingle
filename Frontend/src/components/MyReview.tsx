import review from '../../public/documents/review';
import Image from 'next/image';

export default function MyReview() {
  return (
    <div
      className="bg-gray1 rounded-md border-2 flex justify-center"
      style={{ width: '850px', height: '242px' }}
    >
      <div
        className="flex flex-col justify-between m-4"
        style={{ width: '802px', height: '210px' }}
      >
        <div className="flex justify-between justify-items-center ">
          <div className="flex items-center">
            <div className="relative" style={{ width: '32px', height: '32px' }}>
              <Image
                src="/images/jpgs/test.JPG"
                alt="consultantimg"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-white"
              />
            </div>
            <h4 className="ml-2 text-gray4 text-sm font-semibold">김민성</h4>
            <h4 className="ml-2 text-gray4 text-sm font-semibold">
              2024.06.01
            </h4>
          </div>
          <div className="flex items-center">
            <div className="text-gray4 text-sm mr-2 font-semibold">3.0</div>
            <div className="flex justify-start">
              <span className="text-sub2 mr-1">★</span>
              <span className="text-sub2 mr-1">★</span>
              <span className="text-sub2 mr-1">★</span>
              <span className="text-gray2 mr-1">★</span>
              <span className="text-gray2 mr-1">★</span>
            </div>
          </div>
        </div>
        <div className="h-full pt-4 overflow-auto">{review}</div>
        <div className="flex justify-end">
          <button className="text-gray4 text-sm font-semibold">수정</button>
          <h4 className="ml-2 mr-2">|</h4>
          <button className="text-gray4 text-sm font-semibold">삭제</button>
        </div>
      </div>
    </div>
  );
}
