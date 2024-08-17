export default function EssayNav() {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="ml-10">
                    <button className=" bg-[#D0F2ED] py-2 px-4 mr-[10px] rounded-lg text-point2 text-base">수정 날짜순</button>
                    <button className=" bg-[#D0F2ED] py-2 px-4 rounded-lg text-point2 text-base">이름순</button>
                </div>
                <div className="mr-10">
                    <button className="bg-sub2 py-2 px-10 rounded-lg text-white font-semibold">새 드래프트 작성하기</button>
                </div>
            </div>
            <div className="mt-6">
                <input
                    className=" bg-[#FCFCFC] border-2 border-[#BDC6CA] ml-10 rounded-3xl placeholder:text-gray-300 focus:outline-none focus:border-sub2"
                    type="search"
                    placeholder="에세이 키워드로 검색해주세요!"
                    style={{ width: '850px', height:'40px', paddingLeft: '30px'}}
                />
            </div>
        </div>
    )
}