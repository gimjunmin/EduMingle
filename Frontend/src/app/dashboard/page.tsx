import RecentNoti from "@/components/Common/RecentNoti";
import EssayProgress from "@/components/EssayProgress";
import ContactConList from "@/components/studentComponents/ContactConList";
import RecentDraftList from "@/components/studentComponents/RecentDraftList";
import StudentDashProfile from "@/components/studentComponents/StudentDashProfile";

export default function Dashboard() {
  return (
    <div className="flex mt-12 justify-center sm: ml-40">
      <div>
        <StudentDashProfile />
        <div className="mt-9">
          <EssayProgress />
        </div>
      </div>
      <div className="ml-20">
        <RecentDraftList />
        <div className="mt-9 mb-12 flex flex-row gap-7">
          <ContactConList />
          <RecentNoti />
        </div>
      </div>
    </div>
  )
}
