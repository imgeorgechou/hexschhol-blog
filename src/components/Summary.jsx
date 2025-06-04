import React from "react";

const Summary = ({ content }) => {
  return (
    <div className="font-bold text-[16px] bg-[#EDEDED] rounded-3xl p-6">
      {content}
    </div>
  );
};

export default Summary;
