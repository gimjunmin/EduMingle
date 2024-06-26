import intro from "../../public/documents/intro";

export default function ConIntroduction() {
	const contents = intro;
	return (
		<div className="mt-16 w-full" style={{ height: "440px" }}>
			<h1 className="font-bold text-xl">About</h1>
			<div className="mt-4" dangerouslySetInnerHTML={{ __html: contents }} />
		</div>
	);
}
