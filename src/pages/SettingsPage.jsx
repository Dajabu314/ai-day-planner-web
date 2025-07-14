import React, { useState } from 'react';
import { load, save } from '../utils/storage';

const SettingsPage = () => {
  const [key, setKey] = useState(() => load('openai_key', ''));

  const saveKey = () => {
    save('openai_key', key);
    alert('API key stored in your browser only.');
  };

  return (
    <div className="page">
      <h2>Settings</h2>
      <label>
        OpenAI API key
        <input
          type="password"
          value={key}
          placeholder="sk-..."
          onChange={e => setKey(e.target.value)}
        />
      </label>
      <button onClick={saveKey}>Save</button>

      <hr />
      <label>
        <input
          type="checkbox"
          onChange={() => document.body.classList.toggle('dark')}
        />
        Dark mode
      </label>
    </div>
  );
};

export default SettingsPage;
