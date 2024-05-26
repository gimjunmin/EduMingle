"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function NavBtns({ imName, name, link }) {
	const [icon, setIcon] = useState("Default");
	const [clicked, setClicked] = useState(false);
	const router = useRouter();

	useEffect(() => {
		// 현재 경로가 링크와 일치하는지 확인하여 상태 업데이트
		if (router.pathname === link) {
			setIcon("Selected");
			setClicked(true);
		} else {
			setIcon("Default");
			setClicked(false);
		}
	}, [router.pathname, link]);

	return (
		<Link href={link}>
			<div
				className={`flex items-center justify-start pl-8 rounded-[8px] ${clicked ? "bg-navSelectColor" : "hover:bg-navSelectColor"} cursor-pointer`}
				style={{ width: "320px", height: "68px" }}
			>
				<Image
					src={`/images/pngs/${imName}${icon}.png`}
					alt={name}
					width={32}
					height={32}
				/>
				<span className="text-white text-lg pl-4 font-pretendard font-bold">
					{name}
				</span>
			</div>
		</Link>
	);
}
