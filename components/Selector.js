import { useState } from 'react';

const options = [
  { id: 'floral', label: 'Floral', color: 'bg-pink-500' },
  { id: 'fort', label: 'Fort', color: 'bg-red-600' },
  { id: 'botanique', label: 'Botanique', color: 'bg-green-600' },
  { id: 'rafraichissant', label: 'Rafraîchissant', color: 'bg-blue-500' },
  { id: 'epice', label: 'Épicé', color: 'bg-orange-500' }
];

export default function Selector() {
  const [selected, setSelected] = useState([]);

  const toggle = id => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl mb-6 font-semibold">Choisissez vos préférences</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => toggle(opt.id)}
            className={\`p-4 rounded-xl text-white font-bold transition transform hover:scale-105 \${opt.color} \${selected.includes(opt.id) ? 'ring-4 ring-amber-300' : ''}\`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}