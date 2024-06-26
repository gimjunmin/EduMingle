import Image from "next/image";

export default function EssayStatus() {
	return (
		<div
			className="bg-white rounded-xl mt-4"
			style={{ width: "810px", height: "132px" }}
		>
			<div className="m-4" style={{ width: "770px", height: "95px" }}>
				<div className="flex flex-col justify-between">
					<Image
						src="/images/pngs/Epending.png"
						alt="pending"
						width={68}
						height={22}
					/>
					<div>
						<h1 className="font-bold mt-2 text-xl">
							Why do birds Suddendly Appear?
						</h1>
						<h4 className="text-base text-gray4 font-medium">
							Harvard University - Computer Science
						</h4>
						<h4 className="text-base text-gray3">2024.06.01</h4>
					</div>
				</div>
			</div>
		</div>
	);
}
