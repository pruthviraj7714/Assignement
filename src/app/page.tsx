"use client";

import { CheckboxWithText } from "@/components/CheckBoxWithText";
import { Sidebar } from "@/components/Sidebar";
import { TableSection } from "@/components/TableSection";
import { Checkbox } from "@/components/ui/checkbox";
import { DATA } from "@/data/announcements-data";
import { ANNOUNCEMENT_TYPES } from "@/data/announcements-types";
import {
  Calendar,
  ChevronUp,
  Network,
  Search,
  StarsIcon,
} from "lucide-react";
import { useEffect, useState } from "react";


export default function Home() {
  const [filters, setFilters] = useState<Set<string>>(new Set());
  const [data, setData] = useState(DATA);

  const handleFilterChange = (text: string, checked: boolean) => {
    setFilters(prevFilters => {
      const newFilters = new Set(prevFilters);
      if (checked) {
        newFilters.add(text);
      } else {
        newFilters.delete(text);
      }
      return newFilters;
    });
  };

  const filterData = () => {
    console.log(filters);
    
    setData(
      DATA.filter((d: any) => {
        const sentimentMatch = !filters.size || filters.has(d.sentiment);
        const subTypeMatch = !filters.size || filters.has(d.sub_type);
        return sentimentMatch || subTypeMatch;
      })
    );
  };

  useEffect(() => {
    filterData();
  }, [filters]);

  return (
    <div className="flex">
      <div className="flex justify-start">
        <Sidebar />
        <div className="flex flex-col mt-6 space-y-6 bg-gray-50 p-6 rounded-lg shadow-lg">
          <span className="font-semibold text-lg text-gray-700">Filter By</span>

          <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3 bg-white shadow-sm">
            <Search size={18} className="text-gray-600" />
            <input
              className="border-none focus:outline-none w-32 text-sm placeholder-gray-500"
              placeholder="Type to Search"
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-700">Watchlist</p>
            <Checkbox />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <ChevronUp size={20} className="text-gray-600" />
              <span className="ml-2 font-semibold text-gray-700">Sentiment</span>
            </div>
            <div className="space-y-2">
              <CheckboxWithText text="positive" onCheckChange={handleFilterChange} />
              <CheckboxWithText text="neutral" onCheckChange={handleFilterChange} />
              <CheckboxWithText text="negative" onCheckChange={handleFilterChange} />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <ChevronUp size={20} className="text-gray-600" />
              <span className="ml-2 font-semibold text-gray-700">Announcements</span>
            </div>
            <div className="h-64 overflow-y-auto p-3 bg-white rounded-md shadow-inner space-y-2">
              {ANNOUNCEMENT_TYPES.map((type: string) => (
                <CheckboxWithText text={type} key={type} onCheckChange={handleFilterChange} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between p-4 bg-gray-100 rounded-md shadow-lg">
          <h1 className="text-sm font-bold text-gray-800">Announcements Dashboard</h1>
          <div className="flex gap-4 text-sm">
            <div className="flex gap-1 text-blue-600">
              <StarsIcon size={18} />
              <span className="font-medium">AI-Powered</span>
            </div>
        
            <span className="font-medium text-gray-600">Filtered Announcements: {data.length}</span>
            <div className="flex gap-2 text-gray-700">
              <Calendar size={18} className="text-purple-500" />
              <span className="font-medium">6 Feb 2024 - 7 Feb 2024</span>
            </div>
            <div className="flex gap-2 text-gray-700">
              <Network size={18} className="text-red-500" />
              <span className="font-medium">Updates every 15 minutes</span>
            </div>
          </div>
        </div>
        <div>
          <TableSection data={data} />
        </div>
      </div>
    </div>
  );
}