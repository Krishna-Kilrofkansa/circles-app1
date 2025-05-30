import CircularTimer from '../timer/CircularTimer';

export default function TimerSection({ onTimerClick, timerProps }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Focus Timer</h3>
      <div 
        className="cursor-pointer transition-transform hover:scale-105"
        onClick={onTimerClick}
      >
        <CircularTimer 
          timeLeft={timerProps.timeLeft}
          duration={timerProps.duration}
          size={200}
        />
      </div>
      <p className="text-gray-600 mt-4">Click to start a focus session</p>
    </div>
  );
}