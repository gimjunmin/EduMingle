import EssayStatus from "./EssayStatus";

export default function ConEssay() {
	return (
		<div
			className="flex flex-col items-center mt-16 rounded-xl bg-gray1 overflow-y-auto"
			style={{ width: "850px", maxHeight: "80vh", paddingBottom: "20px" }}
		>
			<EssayStatus />
			<EssayStatus />
			<EssayStatus />
			<EssayStatus />
			<EssayStatus />
		</div>
	);
}
