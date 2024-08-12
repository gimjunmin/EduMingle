import conIntData from '../../../public/documents/conInt.json'
import Image from 'next/image'

export default function ContactConList() {
    return (
        <div>
            <div className="flex mb-4">
                <div className="text-lg">컨택한 선배</div>
                <button className="text-sub1 text-sm ml-3 pt-1">더보기</button>
            </div>
            <div className="bg-[#F4F6F7] rounded-lg flex flex-col overflow-auto gap-3 items-center py-5" style={{ width: '472px', height: '376px' }}>
                {conIntData.conInt.map((info, index) => (
                    <div key={index} className='bg-white rounded-lg flex' style={{ width: '432px', height: '76px'}}>
                        <div className='relative w-[50px] h-[50px] my-[13px] ml-5'>
                            <Image src="/images/jpgs/test.JPG" alt="studentimg" layout="fill" objectFit="cover" className='rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center ml-3'>
                            <div className='text-base text-[#717171] font-bold'>{info.name}</div>
                            <div className='text-[13px] text-[#A3A3A3]'>{info.University}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}