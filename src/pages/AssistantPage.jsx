import React, { useState } from 'react';
import { load } from '../utils/storage';

const AssistantPage = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const apiKey = load('openai_key', '');

  const callChatGPT = async () => {
    if (!apiKey) {
      alert('Add your OpenAI API key in Settings first.');
      return;
    }
    const body = {
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }]
    };
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });
    const json = await res.json();
    setResponse(json.choices?.[0]?.message?.content ?? 'No reply');
  };

  return (
    <div className="page">
      <h2>AI Assistant</h2>
      <textarea
        rows={3}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Ask me anything…"
      />
      <button onClick={callChatGPT}>Send</button>
      <pre>{response}</pre>
    </div>
  );
};

export default AssistantPage;
