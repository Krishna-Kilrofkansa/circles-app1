import { useState } from 'react';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Timer from './components/timer/Timer';
import { useTimer } from './hooks/useTimer';
import { userData, menuItems } from './data/mockData';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isTimerExpanded, setIsTimerExpanded] = useState(false);
  
  const timerProps = useTimer();

  const handleTimerClick = () => {
    setIsTimerExpanded(true);
    setCurrentView('timer');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setIsTimerExpanded(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header userData={userData} />
      
      <div className="flex max-w-7xl mx-auto">
        <main className={`flex-1 p-6 transition-all duration-500 ${isTimerExpanded ? 'mr-0' : 'mr-80'}`}>
          {currentView === 'dashboard' && (
            <Dashboard 
              userData={userData} 
              onTimerClick={handleTimerClick}
              timerProps={timerProps}
            />
          )}
          
          {currentView === 'timer' && (
            <Timer 
              {...timerProps}
              onBackToDashboard={handleBackToDashboard}
            />
          )}
        </main>

        {!isTimerExpanded && (
          <Sidebar 
            menuItems={menuItems}
            currentView={currentView}
            onViewChange={setCurrentView}
          />
        )}
      </div>
    </div>
  );
}