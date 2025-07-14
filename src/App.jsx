import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import TasksPage from './pages/TasksPage';
import NotesPage from './pages/NotesPage';
import AssistantPage from './pages/AssistantPage';
import SettingsPage from './pages/SettingsPage';
import './styles/global.css';

const App = () => (
  <>
    <nav className="top-nav">
      <NavLink to="/">Calendar</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/notes">Notes</NavLink>
      <NavLink to="/assistant">Assistant</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/assistant" element={<AssistantPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  </>
);

export default App;
