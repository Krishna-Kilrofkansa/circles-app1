import { Clock, Target, Trophy, Zap } from 'lucide-react';

export default function StatsGrid({ userData }) {
  const stats = [
    {
      title: "Total Study Time",
      value: userData.totalStudyTime,
      icon: Clock,
      color: "text-blue-500"
    },
    {
      title: "Tasks Completed",
      value: userData.tasksCompleted,
      icon: Target,
      color: "text-green-500"
    },
    {
      title: "Pomodoros",
      value: userData.pomodorosCompleted,
      icon: Trophy,
      color: "text-purple-500"
    },
    {
      title: "Current Level",
      value: `Level ${userData.level}`,
      icon: Zap,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}