import { useState } from 'react';
import { generateActivityData, getActivityColor } from '../../utils/helpers';

export default function ActivityGrid() {
  const [activityData] = useState(generateActivityData());

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Overview</h3>
      <div className="grid grid-cols-13 gap-1">
        {activityData.map((day, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-sm ${getActivityColor(day.level)} hover:ring-2 hover:ring-blue-300 transition-all cursor-pointer`}
            title={`${day.date}: ${day.count} activities`}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>Less</span>
        <div className="flex space-x-1">
          {[0, 1, 2, 3, 4].map(level => (
            <div key={level} className={`w-3 h-3 rounded-sm ${getActivityColor(level)}`} />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}