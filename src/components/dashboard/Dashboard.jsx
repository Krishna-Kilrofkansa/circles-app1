import StatsGrid from './StatsGrid';
import TimerSection from './TimerSection';
import ActivityGrid from './ActivityGrid';

export default function Dashboard({ userData, onTimerClick, timerProps }) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {userData.name.split(' ')[0]}! 👋
        </h2>
        <p className="text-gray-600">Ready to make today productive?</p>
      </div>

      <StatsGrid userData={userData} />
      <TimerSection onTimerClick={onTimerClick} timerProps={timerProps} />
      <ActivityGrid />
    </div>
  );
}
