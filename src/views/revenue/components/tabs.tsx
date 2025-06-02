// Tabs.jsx
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  tabs: string[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm font-medium focus:outline-none transition-colors duration-200
            ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
