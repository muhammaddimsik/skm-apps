import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Options: React.FC = () => {
  return (
    <RadioGroup className="flex justify-center flex-wrap text-center my-4">
      <div>
        <RadioGroupItem value="1" id="1" className="hidden" />
        <Label
          className="border rounded-full border-primary px-4 py-2"
          htmlFor="1"
        >
          1
        </Label>
      </div>
      <div>
        <RadioGroupItem value="2" id="2" className="hidden" />
        <Label
          className="border rounded-full border-primary px-4 py-2"
          htmlFor="2"
        >
          2
        </Label>
      </div>
      <div>
        <RadioGroupItem value="3" id="3" className="hidden" />
        <Label
          className="border rounded-full border-primary px-4 py-2"
          htmlFor="3"
        >
          3
        </Label>
      </div>
      <div>
        <RadioGroupItem value="4" id="4" className="hidden" />
        <Label
          className="border rounded-full border-primary px-4 py-2"
          htmlFor="4"
        >
          4
        </Label>
      </div>
    </RadioGroup>
  );
};

export default Options;
