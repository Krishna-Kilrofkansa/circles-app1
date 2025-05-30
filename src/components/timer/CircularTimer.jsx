import { formatTime } from '../../utils/helpers';

export default function CircularTimer({ timeLeft, duration, size = 200 }) {
  const progress = 1 - timeLeft / duration;
  const radius = (size - 24) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress * circumference);

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="12"
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3b82f6"
          strokeWidth="12"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-mono font-bold text-gray-800 ${size > 250 ? 'text-5xl' : 'text-3xl'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
}