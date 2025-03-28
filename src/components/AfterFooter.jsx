import React from "react";

const AfterFooter = ({customText}) => {
  return (
    <div id="terms-conditions" className="p-10 md:p-20 border-t text-justify border-black">
      {customText}
    </div>
  );
};

export default AfterFooter;
