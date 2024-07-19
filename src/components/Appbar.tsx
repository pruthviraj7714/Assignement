import { Input } from "./ui/input";


export function Appbar() {
    return(
        <div className="flex justify-end items-center p-4 mb-2">
            <div className="flex justify-between items-center gap-7">
                 <Input placeholder="Search Companies" />
                 <div className="flex items-center gap-4">
                    <h3 className="font-sans text-xl">Welcome,<span className="font-semibold ml-3">Dhruv</span></h3>
                    <div className="h-5 w-5 rounded-full bg-orange-800"></div>
                 </div>
            </div>
        </div>
    )

}