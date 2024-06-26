import Image from "next/image";

export default function HeaderBtn() {
	return (
		<div className="flex justify-between items-center">
			<Image
				src="/images/pngs/MessageDefault.png"
				alt="MessageBtn"
				width={32}
				height={32}
			/>
			<Image
				src="/images/pngs/Alarm.png"
				alt="AlarmBtn"
				width={32}
				height={32}
			/>
			<div className="rounded-full overflow-hidden w-8 h-8 ml-2">
				<Image src="/images/jpgs/test.JPG" alt="test" width={32} height={32} />
			</div>
		</div>
	);
}
