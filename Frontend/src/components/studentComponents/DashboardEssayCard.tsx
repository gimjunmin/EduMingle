import essayInfoData from '../../../public/documents/essayInfo.json'

export default function DashboardEssayCard() {
    return (
        <div className="rounded-lg overflow-x-auto" style={{ padding: '16px' }}>
            <div className="flex flex-row gap-4 flex-wrap">
                {essayInfoData.essayInfo.map((essay, index) => (
                    <div key={index} className="flex flex-col items-center bg-white rounded-lg" style={{ width: '200px', height: '272px' }}>
                        <div className="text-sm text-[#717171] mt-4 mr-24 ">{essay.WrittenDate}</div>
                        <div className="text-lg text-[#717171] font-bold mt-2 px-4" >{essay.Title}</div>
                        <div className="text-sm text-[#A3A3A3] mt-2 px-4">{essay.Detail}</div>
                        <button className='bg-sub1 rounded-lg text-white text-sm mt-4' style={{ width: '160px', height: '32px' }}>에세이 이어서 쓰기</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
