import {
  Building2,
  LucideTrendingUp,
  Mail,
  Mic,
  SearchCodeIcon,
  StarsIcon,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="mt-2">
      <div className="w-8 h-8 flex items-center justify-center mx-6 bg-black rounded-none text-white dark:bg-white dark:text-black">
        <LucideTrendingUp />
      </div>
      <div className="flex flex-col items-start text-md mt-7 gap-y-6 p-4 font-sans dark:bg-gray-800 dark:text-gray-200">
        <div className="flex items-center gap-3">
          <StarsIcon className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-800 dark:text-gray-100">AI Assist</h3>
        </div>
        <div className="flex items-center gap-3">
          <SearchCodeIcon className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-800 dark:text-gray-100">Search Filings</h3>
        </div>
        <div className="flex items-center gap-3">
          <Building2 className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-800 dark:text-gray-100">Components</h3>
        </div>
        <div className="flex items-center gap-3 font-bold text-gray-800 dark:text-gray-100">
          <Mic className="text-gray-600 dark:text-gray-400" />
          <h3>Announcements</h3>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-gray-600 dark:text-gray-400" />
          <h3 className="text-gray-800 dark:text-gray-100">Email Updates</h3>
        </div>
      </div>
    </div>
  );
}
