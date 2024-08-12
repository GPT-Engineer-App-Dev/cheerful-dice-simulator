import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

const DiceResult = ({ value }) => {
  const DiceIcon = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6][value - 1] || Dice1;

  return (
    <div className="w-24 h-24 bg-red-500 rounded-2xl flex items-center justify-center">
      <DiceIcon className="w-16 h-16 text-white" />
    </div>
  );
};

export default DiceResult;