import Image from 'next/image'
import essayInfoData from '../../../public/documents/essayInfo.json'
import EssayPin from '../../components/CustomButtons/EssayPin'

export default function EssaySidebar() {
    return (
        <div className=" relative bg-[#EEEEEE] overflow-auto" style={{ width: '485px', height: '956px' }}>
            {/* <div className="flex justify-end items-end">
                <button className='absolute top-6 right-10 text-[32px] text-[#AEAEAE]'>X</button>
            </div> */}
            <div className="flex justify-center items-center mt-[92px]">
                <button className="bg-[#717171] py-2 px-[130px] rounded-lg text-white">선배에게 도움 요청하기</button>
            </div>
            <div>
                <div className="text-[#444444] ml-10 text-lg font-extrabold mt-[30px] mb-4">내 에세이를 첨삭해준 선배</div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="bg-white w-[404px] h-[76px] rounded-lg shadow-sm flex flex-row items-center pl-4">
                        <div className='relative z-0 w-[50px] h-[50px]'>
                            <Image src="/images/jpgs/test.JPG" alt="studentimg" layout="fill" objectFit="cover" className='rounded-full' />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <div className='text-[#717171] font-bold text-base'>Joonhee Shin</div>
                            <div className='text-[#A3A3A3] font-bold text-[13px]'>Harvard University</div>
                        </div>
                    </div>
                    <div className="bg-white w-[404px] h-[76px] rounded-lg shadow-sm flex flex-row items-center pl-4">
                        <div className='relative z-0 w-[50px] h-[50px]'>
                            <Image src="/images/jpgs/test.JPG" alt="studentimg" layout="fill" objectFit="cover" className='rounded-full' />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <div className='text-[#717171] font-bold text-base'>Joonhee Shin</div>
                            <div className='text-[#A3A3A3] font-bold text-[13px]'>Harvard University</div>
                        </div>
                    </div>
                    <div className="bg-white w-[404px] h-[76px] rounded-lg shadow-sm flex flex-row items-center pl-4">
                        <div className='relative z-0 w-[50px] h-[50px]'>
                            <Image src="/images/jpgs/test.JPG" alt="studentimg" layout="fill" objectFit="cover" className='rounded-full' />
                        </div>
                        <div className='flex flex-col ml-4'>
                            <div className='text-[#717171] font-bold text-base'>Joonhee Shin</div>
                            <div className='text-[#A3A3A3] font-bold text-[13px]'>Harvard University</div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="text-[#444444] ml-10 text-lg font-extrabold mt-[30px] mb-4">첨삭 드래프트</div>
                <div className='flex flex-col items-center gap-4 overflow-y-auto' style={{height:'400px'}}>
                    {essayInfoData.essayInfo.map((essay, index) => (
                        <div key={index} className='flex flex-col items-start p-4 bg-white rounded-lg' style={{ width: '404px', height: '156px' }}>
                            <div className='text-[#444444] text-base font-bold'>{essay.Version}</div>
                            <div className='text-[#9D9D9D] text-[15px] font-normal'>{essay.Detail}</div>
                            <div className='flex flex-row gap-[200px]'>
                                <div className='text-[#444444] font-extrabold text-sm'>{essay.WrittenDate}</div>
                                <div className='text-[#444444] font-extrabold text-sm'>{essay.RecentEdit}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className='text-[#444444] ml-10 text-lg font-extrabold mt-[30px] mb-4'>내 드래프트</div>
                <div className=' flex flex-col items-center gap-4 overflow-y-auto' style={{height:'400px'}}>
                    {essayInfoData.essayInfo.map((essay, index) => (
                        <div key={index} className='relative flex flex-col items-start p-4 bg-white rounded-lg' style={{ width: '404px', height: '156px' }}>
                            <div className='absolute top-2 right-2'><EssayPin /></div>
                            <div className='text-[#444444] text-base font-bold'>{essay.Version}</div>
                            <div className='text-[#9D9D9D] text-[15px] font-normal'>{essay.Detail}</div>
                            <div className='flex flex-row gap-[200px]'>
                                <div className='text-[#444444] font-extrabold text-sm'>{essay.WrittenDate}</div>
                                <div className='text-[#444444] font-extrabold text-sm'>{essay.RecentEdit}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}