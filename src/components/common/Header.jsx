import { Flame, Zap } from 'lucide-react';

export default function Header({ userData }) {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Circles
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1 rounded-full">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">{userData.streak} day streak</span>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 rounded-full">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-700">{userData.xp} XP</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
            {userData.level}
          </div>
        </div>
      </div>
    </header>
  );
}