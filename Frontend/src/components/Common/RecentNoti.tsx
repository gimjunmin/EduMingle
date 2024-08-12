import essayNotiData from '../../../public/documents/essayNoti.json'

export default function RecentNoti() {
    return (
        <div>
            <div className="flex mb-4">
                <div className="text-lg">최근 알람</div>
                <button className="text-sub1 text-sm ml-3 pt-1">더보기</button>
            </div>
            <div className="bg-[#F4F6F7] rounded-lg flex flex-col overflow-auto gap-3 items-center py-5" style={{width:'598px', height:'376px'}}>
                {essayNotiData.essayNoti.map((noti, index) => (
                    <div key={index} className='bg-white rounded-lg relative flex flex-col py-4 pl-4' style={{ width: '558px', height: '110px' }}>
                        <div className='absolute top-4 right-5'><div className='bg-[#EE5151] rounded-full' style={{width:'10px', height:'10px'}} /></div>
                        <div className='text-xl font-semibold text-[#717171]'>{noti.title}</div>
                        <div className='text-base text-[#717171]'>{ noti.University }</div>
                        <div className='text-[15px] mt-1 text-[#717171] '>{ noti.Sunbae } 선배의 피드백 도착했습니다.</div>
                    </div>
                ))}
            </div>
        </div>
    )
}