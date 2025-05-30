export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const getActivityColor = (level) => {
  const colors = [
    'bg-gray-100', 'bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500'
  ];
  return colors[level] || colors[0];
};

export const generateActivityData = () => {
  const data = [];
  const today = new Date();
  for (let i = 89; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const intensity = Math.random();
    data.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(intensity * 5),
      level: intensity > 0.8 ? 4 : intensity > 0.6 ? 3 : intensity > 0.4 ? 2 : intensity > 0.2 ? 1 : 0
    });
  }
  return data;
};