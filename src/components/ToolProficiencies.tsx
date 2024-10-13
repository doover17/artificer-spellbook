import React from 'react';

const ToolProficiencies: React.FC = () => {
  const tools = [
    'Thieves' Tools',
    'Tinker's Tools',
    'Alchemist's Supplies',
    'Smith's Tools',
    'Woodcarver's Tools',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tool Proficiencies</h2>
      <ul className="space-y-2">
        {tools.map((tool) => (
          <li key={tool} className="bg-white p-3 rounded shadow">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolProficiencies;