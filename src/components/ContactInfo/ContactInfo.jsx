import './ContactInfo.scss';
import Email from '../../assets/icons/email.svg';
import EmailDark from '../../assets/icons/email-dark.svg';
import Phone from '../../assets/icons/phone.svg';
import PhoneDark from '../../assets/icons/phone-dark.svg';

const ContactInfo = ({ phone, email, currentMode }) => {
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
      </ul>
    </article>
  );
};

export default ContactInfo;
