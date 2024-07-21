import { Search } from "lucide-react";
import { ModeToggle } from "./Theme-Toggle";

export function Appbar() {
  return (
    <div className="flex justify-end items-center p-5 border-2 border-b dark:bg-gray-800">
      <div className="flex justify-between items-center gap-7">
        <div className="flex items-center gap-2 border rounded-md p-2">
          <Search size={20} />
          <input
            className="border-none focus:outline-none flex-1 dark:bg-gray-800"
            placeholder="Search Companies"
          />
        </div>
        <div className="flex items-center gap-4">
          <h3 className="font-sans text-xl">
            Welcome,<span className="font-semibold ml-3">Dhruv</span>
          </h3>
          <div className="h-5 w-5 rounded-full bg-orange-800"></div>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
