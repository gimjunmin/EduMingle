import Image from "next/image";

export default function CostCard() {
	return (
		<div className="ml-4 mt-32">
			<div
				className="bg-sidebar border flex flex-col items-center justify-around rounded-md"
				style={{ width: "346px", height: "248px" }}
			>
				<div
					className="flex flex-col items-center justify-between"
					style={{ width: "137px", height: "60px" }}
				>
					<Image
						src="/images/pngs/Money.png"
						alt="moneyicon"
						width={24}
						height={24}
					/>
					<Image
						src="/images/pngs/Cost.png"
						alt="costicon"
						width={132}
						height={20}
					/>
				</div>
				<div
					className="border-t-2 pt-4 -mt-8 flex flex-col items-start justify-around"
					style={{ width: "292px", height: "100px" }}
				>
					<ul className="space-y-2">
						<li className="flex items-start">
							<div className="w-3 h-3 bg-sub1 rounded-full mt-1"></div>
							<p className="ml-2 text-gray4">
								드래프트 갯수당 추가금액 <span className="font-bold">+10$</span>
							</p>
						</li>
						<li className="flex items-start">
							<div className="w-3 h-3 bg-sub1 rounded-full mt-1"></div>
							<p className="ml-2 text-gray4">
								드래프트 글자수 초과 1자 당{" "}
								<span className="font-bold">+0.2$</span>
							</p>
						</li>
						<li className="flex items-start">
							<div className="w-3 h-3 bg-sub1 rounded-full mt-1"></div>
							<p className="ml-2 text-gray4">
								요청 후 예상 소요시간 <span className="font-bold">3-5일</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="bg-sidebar border rounded-md mt-4 p-6 w-full max-w-md mx-auto"
				style={{ width: "346px", height: "448px" }}
			>
				<div>
					<label
						className="block text-gray4 text-lg font-bold mb-2"
						htmlFor="essayDraft"
					>
						요청 에세이
					</label>
					<select
						id="essayDraft"
						className="block w-full bg-gray-200 border border-gray-200 text-gray3 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					>
						<option>에세이 Draft를 선택하세요</option>
					</select>
				</div>
				<div className="mt-4">
					<label
						className="block text-gray4 text-lg font-bold mb-2"
						htmlFor="feedback"
					>
						피드백/질문사항
					</label>
					<textarea
						id="feedback"
						className="w-full px-3 py-2 border rounded-md focus:outline-none resize-none"
						rows={4}
						placeholder="받고 싶은 피드백/질문사항을 입력해주세요"
						style={{ width: "306px", height: "216px" }}
					></textarea>
				</div>
				<div className="mt-4">
					<button className="w-full bg-sub2 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						피드백 및 첨삭 요청하기
					</button>
				</div>
			</div>
		</div>
	);
}
