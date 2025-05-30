import { Settings, LogOut } from 'lucide-react';
import { quickStats } from '../../data/mockData';

export default function Sidebar({ menuItems, currentView, onViewChange }) {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 p-6 space-y-6 fixed right-0 top-16 bottom-0 overflow-y-auto">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
              currentView === item.id
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="border-t pt-6">
        <h4 className="text-sm font-semibold text-gray-600 mb-3">Quick Stats</h4>
        <div className="space-y-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">{stat.label}</span>
              <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6 space-y-3">
        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-all">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 transition-all">
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}