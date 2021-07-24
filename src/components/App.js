import { useState } from 'react';
import Login from './Login';
import Pokemon from './Pokemon';

function App() {
  const [view, setView] = useState('login');

  return (
    <>
      {view === 'login' && <Login setView={setView} />}
      {view === 'pokemon' && <Pokemon />}
    </>
  );
}

export default App;
