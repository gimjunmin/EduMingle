"use client";

import { useState } from "react";
import ConReview from "./ConReview";
import ConEssay from "./ConEssay";
import ConIntroduction from "./ConIntroduction";

export default function ConTab() {
	let [tab, setTab] = useState("선배소개");
	const tabs = ["선배소개", "리뷰", "맡긴에세이"];
	return (
		<div>
			<div className="flex border-b-2 mt-16">
				{tabs.map((element) => (
					<button
						key={element}
						className={`py-2 px-4 focus:outline-none ${
							tab === element ? "border-b-4 border-point1" : ""
						}`}
						onClick={() => setTab(element)}
					>
						{element}
					</button>
				))}
			</div>
			<div className="mt-4">
				{tab === "선배소개" && <ConIntroduction />}
				{tab === "리뷰" && <ConReview />}
				{tab === "맡긴에세이" && <ConEssay />}
			</div>
		</div>
	);
}
