import Image from 'next/image';
import schoolListData from '../../../public/documents/schoolList.json'; 

export default function StudentDashProfile() { 
    return (
        <div>
            <div className='text-lg mb-4'>내 프로필</div>
            <div className="bg-[#F4F5F7] mb-[8px] rounded-lg flex flex-row justify-center items-center gap-4 pr-6 " style={{ width: '346px', height: '124px' }}>
                <div className='relative z-0 w-[88px] h-[88px]'>
                    <Image src="/images/jpgs/test.JPG" alt="studentimg" layout="fill" objectFit="cover" className='rounded-full' />
                </div>
                <div>
                    <div className='flex border-2 border-point2 rounded-full w-[74px] h-[23px] justify-center items-center text-xs text-point2'>유학준비생</div>
                    <div className='font-semibold text-xl mt-2'>JoonHee Shin</div>
                    <div className='text-base text-gray4'>shinJoonhe@gmail.com</div>
                </div>
            </div>
            <div className="bg-[#F4F5F7] rounded-lg " style={{ width: '346px', height: '244px', overflowY: 'auto', padding:'20px'}}> {/* overflowY를 auto로 설정 */}
                <div className='text-sm font-semibold mb-[20px]'>이 학교를 목표로 하고 있어요!</div>
                <div className='flex flex-wrap justify-start'> {/* Flexbox를 사용하여 가로 정렬 및 줄 바꿈 */}
                    {schoolListData.schoolList.map((school, index) => (
                        <div key={index} className='flex justify-center items-center'> {/* 각 학교 이름 간의 간격 설정 */}
                            <div className='flex justify-center items-center px-4 py-2 bg-[#ABE3DD] text-point2 text-[15px] rounded-full mr-1.5 mb-2.5'>
                                {school.schoolName}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
