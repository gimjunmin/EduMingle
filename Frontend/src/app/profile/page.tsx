import ConCard from "@/components/ConCard";
import ConTab from "@/components/ConTab";

// components/ProfileCard.js
export default function Profile() {
	return (
		<div>
			<div className="bg-sub3 h-32 w-full" />
			<div className="ml-32">
				<ConCard />
				<ConTab />
			</div>
		</div>
	);
}
