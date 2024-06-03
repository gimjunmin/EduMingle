"use client";

import ConCard from "@/components/ConCard";
import { useState } from "react";

// components/ProfileCard.js
export default function Profile() {
	let [select, setSelect] = useState(0);
	return (
		<div>
			<div className="bg-sub3 h-32 w-full" />
			<div className="ml-32">
				<ConCard />
			</div>
		</div>
	);
}
