import {
  AArrowUpIcon,
  ArrowBigUp,
  ArrowBigUpIcon,
  ArrowUp,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpCircle,
  ArrowUpFromLine,
  ArrowUpIcon,
  ChevronUp,
  LucideArrowBigUp,
  Search,
} from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { CheckboxWithText } from "./CheckBoxWithText";
import { ANNOUNCEMENT_TYPES } from "@/data/announcements-types";

export function FilterSection() {
  return (
    <div className="flex flex-col p-4 max-w-xs mt-6.5">
      <span className="font-semibold text-md my-4">Filter By</span>
      <div className="flex items-center gap-4 border border-gray-300 rounded-md p-3">
        <Search size={15} />
        <input
          className="border-none focus:outline-none w-36"
          placeholder="Type to Search"
        />
      </div>
      <div className="flex justify-between my-10">
        <p className="font-semibold">Watchlist</p>
        <Checkbox />
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex">
            <ChevronUp size={20} />
            <div className="ml-1 font-semibold">Sentiment</div>
          </div>
        </div>
        <div className="my-2">
            <CheckboxWithText text={"Positive"} />
            <CheckboxWithText text={"Neutral"} />
            <CheckboxWithText text={"Negative"} />

        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <ChevronUp size={20} />
          <div className="ml-1 font-semibold">Announcements</div>
        </div>

        <div className="h-64 overflow-y-auto p-3">
          {ANNOUNCEMENT_TYPES.map((type) => (
            <CheckboxWithText text={type} key={type} />
          ))}
        </div>
      </div>
    </div>
  );
}
