import { 
  Clock, User, Users, BookOpen, Brain, MessageSquare, 
  Target, Plus
} from 'lucide-react';

export const userData = {
  name: "Alex Johnson",
  xp: 2847,
  level: 12,
  streak: 7,
  totalStudyTime: "127h 32m",
  tasksCompleted: 89,
  pomodorosCompleted: 156
};

export const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Target, badge: null },
  { id: 'timer', label: 'Focus Timer', icon: Clock, badge: null },
  { id: 'tasks', label: 'Task Manager', icon: Plus, badge: '3' },
  { id: 'studyrooms', label: 'Study Rooms', icon: Users, badge: '2' },
  { id: 'skillswap', label: 'Skill Swap', icon: BookOpen, badge: null },
  { id: 'memoryjar', label: 'Memory Jar', icon: Brain, badge: null },
  { id: 'journal', label: 'Journal', icon: MessageSquare, badge: null },
  { id: 'friends', label: 'Friends', icon: User, badge: '1' },
];

export const quickStats = [
  { label: "Today's XP", value: "+127 XP", color: "text-blue-600" },
  { label: "Focus Time", value: "2h 15m", color: "text-green-600" },
  { label: "Tasks Done", value: "5/8", color: "text-purple-600" }
];