import { ChevronUp, Search } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { CheckboxWithText } from "./CheckBoxWithText";
import { ANNOUNCEMENT_TYPES } from "@/data/announcements-types";

export function FilterSection() {
  return (
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
          <CheckboxWithText text="Positive" />
          <CheckboxWithText text="Neutral" />
          <CheckboxWithText text="Negative" />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <ChevronUp size={20} className="text-gray-600" />
          <span className="ml-2 font-semibold text-gray-700">
            Announcements
          </span>
        </div>
        <div className="h-64 overflow-y-auto p-3 bg-white rounded-md shadow-inner space-y-2">
          {ANNOUNCEMENT_TYPES.map((type: string) => (
            <CheckboxWithText text={type} key={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
