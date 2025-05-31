import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('/names').then(res => setNames(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/names', { value: input });
    setNames([...names, res.data]);
    setInput('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple MERN App</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((n, idx) => <li key={idx}>{n.value}</li>)}
      </ul>
    </div>
  );
}

export default App;
