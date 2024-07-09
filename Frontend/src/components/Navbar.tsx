import NavBtn from './NavBtn';

export default function Navbar() {
  return (
    <div className="h-full fixed bg-gray6" style={{ width: '360px' }}>
      <div
        className="flex items-center justify-start pl-4 h-18"
        style={{ width: '360px', height: '68px' }}
      >
        <div className="w-8 h-8 bg-point1 rounded-full"></div>
        <div className="ml-2 font-pretendard text-2xl font-bold text-point1">
          EduMingle
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 space-y-4">
        <NavBtn imgName="Db" name="DashBoard" link="/dashboard" />
        <NavBtn imgName="Ma" name="My Essay" link="/editor" />
        <NavBtn imgName="List" name="List" link="/list" />
        <NavBtn imgName="Mp" name="My Page" link="/profile" />
        <NavBtn imgName="Rq" name="Request" link="/request" />
      </div>
    </div>
  );
}
