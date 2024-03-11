import './Header.scss';
import ModeToggler from '../../components/ModeToggler/ModeToggler';
import PageLogoLight from '../../assets/icons/page-logo-light.svg';

import PageLogoDark from '../../assets/icons/page-logo-dark.svg';

const Header = ({ currentMode, setCurrentMode }) => {
  return (
    <header className='header'>
      <img
        src={currentMode === 'dark' ? PageLogoLight : PageLogoDark}
        alt='Resume page logo'
      />
      <h1>CV Buddy</h1>
      <ModeToggler currentMode={currentMode} setCurrentMode={setCurrentMode} />
    </header>
  );
};

export default Header;
