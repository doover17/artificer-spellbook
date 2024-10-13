import React from 'react';

const InfusionList: React.FC = () => {
  const infusions = [
    'Enhanced Arcane Focus',
    'Enhanced Defense',
    'Enhanced Weapon',
    'Homunculus Servant',
    'Replicate Magic Item',
    'Resistant Armor',
    'Returning Weapon',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Infusions</h2>
      <ul className="space-y-2">
        {infusions.map((infusion) => (
          <li key={infusion} className="bg-white p-3 rounded shadow">
            {infusion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfusionList;