import Image from "next/image";

export default function SearchBar() {
	return (
		<div
			className="border border-gray3 flex items-center rounded-full px-4"
			style={{ width: "472px", height: "36px" }}
		>
			<Image
				src="/images/pngs/SearchIcon.png"
				alt="searchbar"
				width={24}
				height={24}
			/>
			<input
				className="ml-2"
				type="search"
				defaultValue="선배 또는 키워드를 입력하세요"
				style={{ width: "400px" }}
			/>
		</div>
	);
}
