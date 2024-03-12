import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { useState, useEffect } from 'react';
import { toggleMode } from './helpers/toggleMode';
function App() {
  const [currentMode, setCurrentMode] = useState('light');
  useEffect(() => {
    const initialMode = toggleMode();
    setCurrentMode(initialMode);
  }, []);
  return (
    <>
      <Header currentMode={currentMode} setCurrentMode={setCurrentMode} />
      <Main currentMode={currentMode} />
      <Footer currentMode={currentMode} />
    </>
  );
}

export default App;

