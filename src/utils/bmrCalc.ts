export const calculateBMR = (age: number, height: number, weight: number, gender: 'male' | 'female', activity: 'low' | 'medium' | 'high') => {
  // Harris-Benedict formula here
  let bmr = gender === 'male' ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  const activityFactors = { low: 1.2, medium: 1.55, high: 1.725 };
  return bmr * activityFactors[activity];
};

export const calculateTargetBMR = (currentBMR: number, currentWeight: number, targetWeight: number) => {
  const deficitPerDay = ((currentWeight - targetWeight) / 30) * 7700; // Approx 7700 kcal per kg loss
  return currentBMR - deficitPerDay;
};