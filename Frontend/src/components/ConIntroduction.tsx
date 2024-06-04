import intro from "../../public/documents/intro";

export default function ConIntroduction() {
	const contents = intro;
	return (
		<div className="mt-16">
			<h1 className="text-xl">About</h1>
			<h3 className="mt-4">{contents}</h3>
		</div>
	);
}
