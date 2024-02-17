import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className="w-3/12 rounded-2xl rounded-tl-none mb-2 pl-4 bg-primary">
      <ThreeDots
        height="30"
        width="30"
        radius="9"
        color="#000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
