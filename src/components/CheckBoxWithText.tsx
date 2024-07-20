import { Checkbox } from "./ui/checkbox";

export function CheckboxWithText({text} : {text : string}) {
    return (
        <div className="flex justify-between gap-4 my-5">
            <p className="font-sans text-gray-400">{text}</p>
            <Checkbox />
        </div>
    )
}