import React from "react";
import TabComponent from "./TabComponent";

const TabsInner = ({
  title,
  title2,
  price,
  price2,
  include1,
  include2,
  include3,
  include4,
  include5,
  include6,
  amount1,
  amount2,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-start">
      <TabComponent
        title={title}
        price={price}
        include1={include1}
        include2={include2}
        include3={include3}
        amount1={amount1}
      />
      <TabComponent
        title={title2}
        price={price2}
        include1={include4}
        include2={include5}
        include3={include6}
        amount2={amount2}
      />
    </div>
  );
};

export default TabsInner;
