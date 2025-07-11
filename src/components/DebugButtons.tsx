import React from 'react';

const MealCard: React.FC<{ title: string; target: number; onSubmitReal: (value: number) => void }> = ({ title, target, onSubmitReal }) => {
  return <div>{title}: Target {target} kcal</div>; // Expand later
};

export default DebugButtons;