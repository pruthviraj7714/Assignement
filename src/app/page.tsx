import { Appbar } from "@/components/Appbar";
import { FilterSection } from "@/components/FilterSection";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Appbar />
      <div className="flex justify-start">
        <Sidebar />
        <FilterSection />
      </div>
      <div>
      </div>
    </div>
  );
}
