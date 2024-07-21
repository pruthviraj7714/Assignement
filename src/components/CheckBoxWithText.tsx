import { Checkbox } from "./ui/checkbox";

export function CheckboxWithText({
  text,
  onCheckChange
}: {
  text: string;
  onCheckChange: (text: string, checked: boolean) => void; 
}) {
  return (
    <div className="flex justify-between gap-4 my-5">
      <p className="font-sans text-gray-400">{text}</p>
      <Checkbox 
        onCheckedChange={(checked) => onCheckChange(text, checked as boolean)}
      />
    </div>
  );
}
