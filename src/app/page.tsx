import { Appbar } from "@/components/Appbar";
import { FilterSection } from "@/components/FilterSection";
import { Sidebar } from "@/components/Sidebar";
import { TableSection } from "@/components/TableSection";
import {
  AudioLines,
  BarChart3,
  Calendar,
  Network,
  StarsIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex justify-start">
        <Sidebar />
        <FilterSection />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4 bg-gray-100 rounded-md shadow-lg">
          <h1 className="text-sm font-bold text-gray-800">
            Announcements Dashboard
          </h1>
          <div className="flex gap-4 text-sm">
            <div className="flex gap-1 text-blue-600">
              <StarsIcon size={18} />
              <span className="font-medium">AI-Powered</span>
            </div>
            <div className="flex  gap-1 border border-gray-300 px-3 py-1 h-8 rounded-md shadow-sm bg-white">
              <BarChart3 size={18} className="text-green-500" />
              <span className="font-medium text-gray-700">Filter</span>
            </div>
            <span className="font-medium text-gray-600">
              Filtered Announcements: 124
            </span>
            <div className="flex  gap-2 text-gray-700">
              <Calendar size={18} className="text-purple-500" />
              <span className="font-medium">6 Feb 2024 - 7 Feb 2024</span>
            </div>
            <div className="flex  gap-2 text-gray-700">
              <Network size={18} className="text-red-500" />
              <span className="font-medium">Updates every 15 minutes</span>
            </div>
          </div>
        </div>
        <div>
          <TableSection />
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
