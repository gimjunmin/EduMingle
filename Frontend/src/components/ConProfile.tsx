import Image from 'next/image';
import confirm from '../../public/images/pngs/confirm.png';
import intro from '../../public/documents/introduce.js';

export default function ConProfile() {
  return (
    <div
      className="flex items-center justify-center rounded-lg border"
      style={{ width: '346px', height: '392px' }}
    >
      <div
        className="flex flex-col items-center justify-between"
        style={{ width: '306px', height: '340px' }}
      >
        <div className="relative w-24 h-24">
          <Image
            src="/images/jpgs/test.JPG"
            alt="consultantimg"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-white"
          />
        </div>
        <div
          className="flex flex-col items-center"
          style={{ width: '306px', height: '178px' }}
        >
          <div className="flex items-center justify-center">
            <div className="font-bold text-xl text-lg">Min Sung Kim</div>
            <Image
              className="ml-1"
              alt="confirm_img"
              src={confirm}
              style={{ width: '16px', height: '16px' }}
            />
          </div>
          <div className="font-normal text-sm text-gray-400">
            Harvard University
          </div>
          <div className="flex justify-start mt-2">
            <span className="text-sub2 mr-1">★</span>
            <span className="text-sub2 mr-1">★</span>
            <span className="text-sub2 mr-1">★</span>
            <span className="text-gray2 mr-1">★</span>
            <span className="text-gray2 mr-1">★</span>
          </div>
          <div
            className="flex text-sm font-normal bg-graybox rounded-lg text-fontgray items-center justify-center"
            style={{ width: '152px', height: '32px' }}
          >
            Computer Science
          </div>
          <div className="font-normal text-sm text-fontgray mt-2 text-center">
            {intro}
          </div>
        </div>
        <button
          className="bg-bthblue text-white rounded-lg font-normal"
          style={{ width: '306px', height: '32px' }}
        >
          프로필 보기
        </button>
      </div>
    </div>
  );
}
