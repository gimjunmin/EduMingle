import ConCard from "@/components/ConCard";
import ConTab from "@/components/ConTab";
import CostCard from "@/components/CostCard";

export default function List() {
	return (
		<div>
			<div className="bg-sub3 h-32 w-full" />
			<div className="flex flex-row">
				<div className="ml-32" style={{ width: "850px" }}>
					<ConCard />
					<ConTab />
				</div>
				<CostCard />
			</div>
		</div>
	);
}
