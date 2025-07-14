import React, { useState } from 'react';
import { load, save } from '../utils/storage';
import { v4 as uuid } from 'uuid';

const NotesPage = () => {
  const [notes, setNotes] = useState(() => load('notes', []));
  const [text, setText] = useState('');

  const addNote = () => {
    if (!text.trim()) return;
    const next = [...notes, { id: uuid(), body: text }];
    setNotes(next);
    save('notes', next);
    setText('');
  };

  return (
    <div className="page">
      <h2>Notes</h2>
      <textarea
        rows={3}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Save</button>

      <ul>
        {notes.map(n => (
          <li key={n.id}>{n.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesPage;
