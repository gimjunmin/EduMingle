import Image from 'next/image';
import NavBtn from './NavBtn';
import Logo from '../../../public/images/pngs/Logo.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="h-full fixed bg-gray6 z-20" style={{ width: '360px' }}>
      <div
        className="flex items-center pl-4 h-18"
        style={{ width: '360px', height: '68px' }}
      >
        <Link href={'/'}>
          <Image src={Logo} alt={'Logo'} width={200} />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-4">
        <NavBtn imgName="Db" name="DashBoard" link="/dashboard" />
        <NavBtn imgName="Ma" name="My Essay" link="/myEssayList" />
        <NavBtn imgName="List" name="List" link="/list" />
        <NavBtn imgName="Mp" name="My Page" link="/profile" />
        <NavBtn imgName="Rq" name="Request" link="/request" />
      </div>
    </div>
  );
}