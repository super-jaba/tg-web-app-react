import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <h1>JOPAAAAAAAA</h1>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
