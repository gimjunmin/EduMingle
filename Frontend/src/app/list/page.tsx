import ConProfile from '@/components/consultantComponents/ConProfile';

export default function List() {
  return (
    <div className="flex justify-center mt-20">
      <div className="space-y-8" style={{ width: '1480px' }}>
        <div>
          <div className="font-bold text-xl text-fontgray mb-4">선배리스트</div>
          <div className="flex items-center justify-between">
            <div className="mb-4">
              <button
                className="bg-graybox rounded-lg text-fontgray"
                style={{ width: '104px', height: '36px' }}
              >
                수정 날짜순
              </button>
              <button
                className="bg-graybox rounded-lg text-fontgray ml-2"
                style={{ width: '72px', height: '36px' }}
              >
                이름순
              </button>
            </div>
            <button
              className="text-white bg-bthblue rounded-lg"
              style={{ width: '220px', height: '36px' }}
            >
              내 선배만 보기
            </button>
          </div>
          <input
            className="bg-graybox rounded-lg"
            style={{ width: '850px', height: '40px' }}
            type="text"
          />
          <button
            className="bg-fontgray rounded-lg text-white ml-4"
            style={{ width: '94px', height: '40px' }}
          >
            검색
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ConProfile />
          <ConProfile />
          <ConProfile />
          <ConProfile />
          <ConProfile />
          <ConProfile />
          <ConProfile />
          <ConProfile />
        </div>
      </div>
    </div>
  );
}
