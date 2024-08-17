import EssayNav from "@/components/layout/EssayNav";
import StudentEssayCard from "@/components/studentComponents/StudentEssayCard";

export default function MyEssayListPage() {
  return (
    <div className="my-14 mx-4">
      <div className="flex flex-col">
        <div className="text-[22px] font-bold ml-10 mb-4 ">내 에세이</div>
        <EssayNav />
      </div>
      <div className="flex justify-center items-center mt-10">
        <StudentEssayCard />
      </div>
    </div>
  )
}