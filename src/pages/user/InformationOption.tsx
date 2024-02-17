import { Badge } from "lucide-react";
import React from "react";

const InformationOption: React.FC = () => {
  return (
    <Badge className="mb-1 leading-relaxed">
      Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat Sesuai
    </Badge>
  );
};

export default InformationOption;
