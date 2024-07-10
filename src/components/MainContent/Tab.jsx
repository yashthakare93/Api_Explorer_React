import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Params");

  const tabs = [
    { name: "Params" },
    { name: "Authorization" },
    { name: "Body" },
    { name: "Scripts" },
    { name: "Test" },
    { name: "Settings" },
  ];

  return (
    <div className="bg-gray-950 py-4 text-white">
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded ${
              activeTab === tab.name
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "Params" && (
          <div>
           
          </div>
        )}
        {activeTab === "Authorization" && (
          <div>
         
          </div>
        )}
        {activeTab === "Body" && (
          <div>
            
          </div>
        )}
        {activeTab === "Scripts" && (
          <div>
          
          </div>
        )}
        {activeTab === "Test" && (
          <div>
          
          </div>
        )}
        {activeTab === "Settings" && (
          <div>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
