import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Spell {
  index: string;
  name: string;
  level: number;
}

const SpellList: React.FC = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get('https://www.dnd5eapi.co/api/spells');
        setSpells(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spells:', error);
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  if (loading) {
    return <div>Loading spells...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Spells</h2>
      <ul className="space-y-2">
        {spells.map((spell) => (
          <li key={spell.index} className="bg-white p-3 rounded shadow">
            <h3 className="font-semibold">{spell.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpellList;