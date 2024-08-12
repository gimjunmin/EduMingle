export default function EssayProgress() { 
    return (
        <div>
            <div className="text-lg mb-4">에세이별 상태</div>
            <div className="flex justify-center items-center bg-[#F4F6F7] rounded-lg mb-[7px] pt-2" style={{ width: '346px', height: '66px', position: 'relative' }}>
                <div className="absolute bg-gray4 z-0" style={{ width: '280px', height: '2px', top: '38%'}}></div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray4 rounded-full w-4 h-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">응답대기</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-sub2 rounded-full w-4 h-4 border-white border-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">검토중</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray4 rounded-full w-4 h-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">작업중</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray4 rounded-full w-4 h-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">수정요청</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray4 rounded-full w-4 h-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">작업중</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray4 rounded-full w-4 h-4 mx-[19px] z-10"></div>
                    <div className="mt-2 text-xs text-[#717171]">완료</div>
                </div>
            </div>
            <div className="bg-[#F4F6F7] rounded-lg" style={{ width: '346px', height: '303px' }}></div>
        </div>
    )
}
