import { BarChart2, Building2, GitBranchPlus, GitGraph, LucideGitGraph, LucideTrendingUp, Mail, Mic, Mic2, SearchCodeIcon, Speaker, SpeakerIcon, StarsIcon, TrendingUp } from "lucide-react";

export function Sidebar() {
  return(
  <div className="">
    <div className="w-8 h-8 flex items-center justify-center mx-6 bg-black rounded-none text-white dark:bg-white dark:text-black">
        <LucideTrendingUp />
    </div>
    <div className="flex flex-col items-start text-md mt-7 gap-y-6 p-4 font-sans">
        <div className="flex items-center gap-3">
            <StarsIcon />
            <h3>AI Assist</h3>
        </div>
        <div className="flex items-center gap-3">
            <SearchCodeIcon />
            <h3>Search Filings</h3>
        </div>
        <div className="flex items-center gap-3">
            <Building2 />
            <h3>Components</h3>
        </div>
        <div className="flex items-center gap-3 font-bold">
            <Mic />
            <h3>Announcements</h3>
        </div>
        <div className="flex items-center gap-3">
            <Mail />
            <h3>Email Updates</h3>
        </div>
    </div>

  </div>
  );
}
