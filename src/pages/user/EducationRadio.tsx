import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  value: string;
  label: string;
}

const EducationRadio: React.FC<Props> = ({ value, label }) => {
  return (
    <div className="mt-4">
      <RadioGroupItem value={value} id={value} className="hidden" />
      <Label
        className="border rounded-full border-primary px-4 py-2 text-xs"
        htmlFor={value}
      >
        {label}
      </Label>
    </div>
  );
};

export default EducationRadio;
