import { useState } from "react";
import TabComponent from "./TabComponent";
import TabsInner from "./TabsInner";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-container mx-auto w-60 justify-between flex border border-red-500 items-center rounded-lg px-4 py-2 gap-2">
        <div
          className={`tab cursor-pointer p-4 rounded-lg w-1/2 flex items-center justify-center text-xl font-bold text-[#db251a] ${
            activeTab === "tab1" ? "bg-[#db251a] text-white" : ""
          }`}
          onClick={() => handleTabClick("tab1")}
        >
          Naira
        </div>
        <div
          className={`tab cursor-pointer p-4 rounded-lg w-1/2 flex items-center justify-center text-xl font-bold text-[#db251a] ${
            activeTab === "tab2" ? "bg-[#db251a] text-white" : ""
          }`}
          onClick={() => handleTabClick("tab2")}
        >
          USD
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="tab-content-container overflow-hidden relative">
        {/* Add transition effect for content sliding */}
        <div
          className={`tab-content transition-transform duration-300 ${
            activeTab === "tab1" ? "translate-x-0" : "translate-x-[calc(-100%)]"
          }`}
        >
          {activeTab === "tab1" && (
            <div className="my-20">
              <TabsInner
                title={"Join Our Global Education Community"}
                title2={"Join Our Local Education Community"}
                price={"# 300,000"}
                include1={"Loan Processing"}
                include2={"Admission Processing to the US or Canada"}
                include3={"Visa Processing Support"}
                include4={"Admission Processing"}
                include5={"Loan and Non-Loan Finance Option Processing"}
                include6={"Access to Global Undergraduate Community"}
                price2={"# 280,000"}
              />
            </div>
          )}
        </div>

        {/* Add transition effect for content sliding */}
        <div
          className={`tab-content transition-transform duration-300 ${
            activeTab === "tab2" ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {activeTab === "tab2" && (
            <div className="my-20">
              <TabsInner
                title={"Join Our Global Education Community"}
                title2={"Join Our Local Education Community"}
                price={"$450usd"}
                include1={"Loan Processing"}
                include2={"Admission Processing to the US or Canada"}
                include3={"Visa Processing Support"}
                include4={"Admission Processing"}
                include5={"Finance Option Processing"}
                include6={"Global Undergraduate Community"}
                price2={"$400usd"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
