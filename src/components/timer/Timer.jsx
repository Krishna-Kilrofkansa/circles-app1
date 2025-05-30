import { Play, Pause, RotateCcw } from 'lucide-react';
import CircularTimer from './CircularTimer';
import { formatTime } from '../../utils/helpers';

export default function Timer({ 
  timeLeft, 
  duration, 
  isActive, 
  sessions, 
  handleStartPause, 
  handleReset, 
  onBackToDashboard 
}) {
  return (
    <div className="max-w-md mx-auto pt-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Focus Session</h2>
        <p className="text-gray-600">Stay focused and productive</p>
      </div>

      <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 text-center">
        <div className="mb-8">
          <CircularTimer 
            timeLeft={timeLeft}
            duration={duration}
            size={280}
          />
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handleStartPause}
            className={`px-8 py-3 rounded-xl font-semibold transition-all ${
              isActive 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isActive ? (
              <><Pause className="w-5 h-5 inline mr-2" />Pause</>
            ) : (
              <><Play className="w-5 h-5 inline mr-2" />Start</>
            )}
          </button>
          <button
            onClick={handleReset}
            className="px-8 py-3 rounded-xl bg-gray-500 hover:bg-gray-600 text-white font-semibold transition-all"
          >
            <RotateCcw className="w-5 h-5 inline mr-2" />
            Reset
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Session {sessions.length + 1} • {Math.floor(duration / 60)} minutes
        </div>
      </div>

      <button
        onClick={onBackToDashboard}
        className="mt-6 w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}