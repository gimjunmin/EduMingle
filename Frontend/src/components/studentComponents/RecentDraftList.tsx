import DashboardEssayCard from "./DashboardEssayCard";

export default function RecentDraftList() {
    return (
        <div>
            <div className="flex mb-4">
                <div className="text-lg">최근 작성한 드래프트</div>
                <button className="text-sub1 text-sm ml-3">더보기</button>
            </div>
            <div className="bg-[#F4F6F7] rounded-lg flex flex-col items-center" style={{ width: '1102px', height: '376px' }}>
                <button className="bg-sub1 rounded-lg mt-5 text-white" style={{ width: '1062px', height: '80px' }}>새 드래프트 작성하기</button>
                <DashboardEssayCard />
            </div>
        </div>
    )
}