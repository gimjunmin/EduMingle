import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const data = {
	labels: ["1.0", "2.0", "3.0", "4.0", "5.0"],
	datasets: [
		{
			label: "Ratings",
			data: [5, 10, 15, 20, 25], // 예시 데이터, 실제 데이터로 변경
			backgroundColor: "rgba(54, 162, 235, 0.2)",
			borderColor: "rgba(54, 162, 235, 1)",
			borderWidth: 1,
		},
	],
};

const options = {
	indexAxis: "y",
	scales: {
		x: {
			beginAtZero: true,
		},
	},
};

export default function ReviewGraph() {
	return (
		<div
			className="flex items-center justify-center bg-gray1 rounded-md border-2"
			style={{ width: "850px", height: "160px" }}
		>
			<div
				className="flex flex-col items-center"
				style={{ width: "96px", height: "70px" }}
			>
				<div className="text-gray4 text-3xl mr-2 font-semibold">3.0</div>
				<div className="flex">
					<span className="text-sub2 mr-1">★</span>
					<span className="text-sub2 mr-1">★</span>
					<span className="text-sub2 mr-1">★</span>
					<span className="text-gray2 mr-1">★</span>
					<span className="text-gray2 mr-1">★</span>
				</div>
				<h1 className="font-normal text-base">전체 132개</h1>
			</div>
			<div
				className="mx-4 h-full border-l-2 border-gray-300 mr-24"
				style={{ height: "108px" }}
			></div>
			<div>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
}
