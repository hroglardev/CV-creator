import './Footer.scss';
import LinkedIn from '../../assets/icons/linkedIn.svg';
import LinkedInDark from '../../assets/icons/linkedIn-dark.svg';
import Github from '../../assets/icons/github.svg';
import GithubDark from '../../assets/icons/github-dark.svg';

const Footer = ({ currentMode }) => {
  return (
    <footer>
      <p>&copy; 2024 Lucas Cubile - CV Buddy</p>
      <a href='https://github.com/hroglardev/' target='_blank'>
        <img
          src={currentMode === 'dark' ? Github : GithubDark}
          alt='github'
          width={'40px'}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/lucas-martin-cubile/'
        target='_blank'>
        <img
          src={currentMode === 'dark' ? LinkedIn : LinkedInDark}
          alt='linkedIn'
          width={'60px'}
        />
      </a>
    </footer>
  );
};

export default Footer;
