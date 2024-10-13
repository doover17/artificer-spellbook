import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SpellList from './components/SpellList';
import InfusionList from './components/InfusionList';
import ToolProficiencies from './components/ToolProficiencies';
import { Book, Zap, Tool } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('spells');

  const tabs = [
    { id: 'spells', label: 'Spells', icon: Book },
    { id: 'infusions', label: 'Infusions', icon: Zap },
    { id: 'tools', label: 'Tools', icon: Tool },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-6 overflow-auto">
        {activeTab === 'spells' && <SpellList />}
        {activeTab === 'infusions' && <InfusionList />}
        {activeTab === 'tools' && <ToolProficiencies />}
      </main>
    </div>
  );
}

export default App;