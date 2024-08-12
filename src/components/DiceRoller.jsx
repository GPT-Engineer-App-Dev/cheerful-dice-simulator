import React, { useState } from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Settings, X } from 'lucide-react';
import { Button } from './ui/button';
import DiceResult from './DiceResult';

const DiceRoller = () => {
  const [results, setResults] = useState([]);
  const [diceType, setDiceType] = useState(6);

  const rollDice = () => {
    const result = Math.floor(Math.random() * diceType) + 1;
    setResults([...results, result]);
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <div className="bg-cream-100 rounded-3xl p-6 w-full max-w-md shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <Button variant="ghost" size="icon">
          <Settings className="h-6 w-6 text-red-500" />
        </Button>
        <div className="text-red-500 font-semibold">@{results.length}</div>
      </div>

      <div className="flex justify-center mb-6">
        <DiceResult value={results[results.length - 1] || 1} />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[4, 6, 8, 10, 12, 20].map((dice) => (
          <Button
            key={dice}
            variant={diceType === dice ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setDiceType(dice)}
          >
            d{dice}
          </Button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button variant="outline" size="icon" className="rounded-full" onClick={clearResults}>
          <X className="h-6 w-6" />
        </Button>
        <Button className="rounded-full px-8" onClick={rollDice}>
          Roll
        </Button>
      </div>
    </div>
  );
};

export default DiceRoller;