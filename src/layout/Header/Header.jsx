import './Header.scss';
import PageLogo from '../../assets/icons/page-logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={PageLogo} alt='Resume page logo' />
      <h1>CV Buddy</h1>
    </header>
  );
};

export default Header;
