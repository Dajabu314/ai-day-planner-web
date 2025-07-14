import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { load, save } from '../utils/storage';

const TasksPage = () => {
  const [tasks, setTasks] = useState(() => load('tasks', []));
  const [text, setText] = useState('');

  const addTask = () => {
    if (!text.trim()) return;
    const next = [...tasks, { id: uuid(), title: text }];
    setTasks(next);
    save('tasks', next);
    setText('');
  };

  return (
    <div className="page">
      <h2>Task Inbox</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;

