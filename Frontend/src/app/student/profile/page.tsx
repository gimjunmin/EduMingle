import StudentCardMy from '@/components/studentComponents/StudentCardMy';
import StudentTabMy from '@/components/studentComponents/StudentTabMy';

export default function Profile() {
  return (
    <div className="bg-sub3 h-32 w-full">
      <div className='flex justify-center'>
        <div style={{ width: '1000px' }}>
          <StudentCardMy />
          <StudentTabMy />
        </div>
      </div>
    </div>
  );
}