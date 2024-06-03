import Image from "next/image";

export default function ConsultantCard() {
	return (
		<div className="flex flex-col items-start">
			<div className="flex justify-start -mt-16">
				<div className="relative w-32 h-32">
					<Image
						src="/images/jpgs/test.JPG"
						alt="consultantimg"
						layout="fill"
						objectFit="cover"
						className="rounded-full border-4 border-white"
					/>
				</div>
			</div>
			<Image
				className="mt-8"
				src="/images/pngs/ConsultantTag.png"
				alt="consultanttag"
				width={96}
				height={26}
			/>
			<div className="text-left mt-2">
				<h2 className="text-2xl font-semibold">Joonhi Shin</h2>
				<p className="text-gray-600">Harvard University, Computer Science</p>
				<div className="flex justify-start mt-2">
					<span className="text-sub2 mr-1">★</span>
					<span className="text-sub2 mr-1">★</span>
					<span className="text-sub2 mr-1">★</span>
					<span className="text-gray2 mr-1">★</span>
					<span className="text-gray2 mr-1">★</span>
				</div>
			</div>
		</div>
	);
}
