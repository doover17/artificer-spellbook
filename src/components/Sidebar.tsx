import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Artificer's Spellbook</h1>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id} className="mb-2">
            <button
              className={`flex items-center w-full p-2 rounded ${
                activeTab === tab.id ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="mr-2" size={20} />
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;