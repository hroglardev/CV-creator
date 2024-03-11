import './Header.scss';
import PageLogoLight from '../../assets/icons/page-logo-light.svg';
// import PageLogoDark from '../../assets/icons/page-logo-dark.svg';

const Header = () => {
  return (
    <header className='header'>
      <img src={PageLogoLight} alt='Resume page logo' />
      <h1>CV Buddy</h1>
    </header>
  );
};

export default Header;
