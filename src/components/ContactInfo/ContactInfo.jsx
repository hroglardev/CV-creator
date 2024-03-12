import './ContactInfo.scss';
import Email from '../../assets/icons/email.svg';
import EmailDark from '../../assets/icons/email-dark.svg';
import Phone from '../../assets/icons/phone.svg';
import PhoneDark from '../../assets/icons/phone-dark.svg';
import Web from '../../assets/icons/web.svg';
import WebDark from '../../assets/icons/web-dark.svg';
const ContactInfo = ({ phone, email, website, currentMode }) => {
  return (
    <article>
      <h2 className='contact'>Contact me:</h2>
      <ul className='contact-info'>
        <li>
          <img
            src={currentMode === 'light' ? Email : EmailDark}
            alt='email'
            width={'20px'}
          />
          {email}
        </li>
        <li>
          <img
            src={currentMode === 'light' ? Phone : PhoneDark}
            alt='email'
            width={'20px'}
          />
          {phone}
        </li>
        <li className='website'>
          <img
            src={currentMode === 'light' ? Web : WebDark}
            alt='web'
            width={'20px'}
          />
          {website}
        </li>
      </ul>
    </article>
  );
};

export default ContactInfo;
