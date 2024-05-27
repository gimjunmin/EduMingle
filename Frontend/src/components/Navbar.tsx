import NavBtn from "./NavBtn";

export default function Navbar() {
	return (
		<div className="bg-navBgColor" style={{ width: "360px", height: "1080px" }}>
			<div
				className="flex items-center justify-start pl-4 h-18"
				style={{ width: "360px", height: "68px" }}
			>
				<div className="w-8 h-8 bg-iconColor rounded-full"></div>
				<div className="ml-2 font-pretendard text-2xl font-bold text-iconColor">
					EduMingle
				</div>
			</div>
			<NavBtn imName="Db" name="DashBoard" link="/dashboard" />
			<NavBtn imName="Ma" name="My Essay" link="/editor" />
			<NavBtn imName="List" name="List" link="/list" />
			<NavBtn imName="Mp" name="My Page" link="/profile" />
			<NavBtn imName="Rq" name="Request" link="/request" />
		</div>
	);
}