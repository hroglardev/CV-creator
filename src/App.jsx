import './App.scss';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { useState } from 'react';
function App() {
  const [currentMode, setCurrentMode] = useState(localStorage.getItem('theme'));
  return (
    <>
      <Header currentMode={currentMode} setCurrentMode={setCurrentMode} />
      <Main currentMode={currentMode} />
      <Footer />
    </>
  );
}

export default App;

