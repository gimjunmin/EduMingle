import studentEssayData from '../../../public/documents/studentEssay.json'
import Link from 'next/link';

export default function StudentEssayCard() {
    return (
        <div className='overflow-x-auto'>
            <div className='grid grid-cols-4 gap-4'>
                {studentEssayData.studentEssay.map((essay, index) => (
                    <div key={index} className="relative bg-white border-2 border-[#D4D4D4] rounded-lg" style={{ width: '346px', height: '308px', padding: '20px' }}>
                        <div className='flex items-center'>
                            <div className='bg-[#FDD5C4] rounded-full text-sub2 text-sm px-[10px] py-[4px]'>{essay.status}</div>
                            <div className='text-sm text-gray4 ml-2'>{essay.FixedDate}</div>
                            <div className='text-sm text-gray4 font-semibold absolute top-5 right-5'>{essay.fixedTime}</div>
                        </div>
                        <div className=' overflow-auto text-lg font-extrabold mt-2' style={{width:'306px', height:'36px'}}>{essay.title}</div>
                        <div className='flex my-2'>
                            <div className='text-sm text-gray5 font-medium'>{essay.university}</div>
                            <div className='text-sm text-gray5 font-medium mx-1'>-</div>
                            <div className='text-sm text-gray5 font-medium'>{essay.major}</div>
                        </div>
                        <div className='bg-gray2 my-4' style={{ width: '306px', height: '1px' }} />
                        <div className='text-sm text-gray4 font-normal' style={{ width: '306px', height: '65px', maxHeight: '65px', overflow: 'hidden' }}>{essay.detail}</div>
                        <Link
                            href={'/editor/'}
                            className='bg-sub1 text-sm rounded-xl text-white font-medium'
                            style={{ width: '306px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '27px' }}
                        >Write More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}