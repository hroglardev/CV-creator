import Sun from '../../assets/icons/sun.svg';
import Moon from '../../assets/icons/moon.svg';
import { toggleMode } from '../../helpers/toggleMode';
import './ModeToggler.scss';

const ModeToggler = ({ currentMode, setCurrentMode }) => {
  const switchMode = () => {
    setCurrentMode(toggleMode());
  };

  return (
    <>
      <div className='toggler-wrapper'>
        {currentMode === 'light' ? (
          <img className='mode-logo' src={Sun} alt='Sun' />
        ) : (
          <img className='mode-logo' src={Moon} alt='Moon' />
        )}
        <button
          onClick={switchMode}
          className={`toggle-background`}
          aria-label='Toggle light/dark mode'>
          <div className={`toggle-button ${currentMode}`}></div>
        </button>
      </div>
    </>
  );
};

export default ModeToggler;
