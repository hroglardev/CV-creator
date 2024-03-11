import './ContactInfo.scss';
import Email from '../../assets/icons/email.svg';

const ContactInfo = ({ phone, email }) => {
  return (
    <article>
      <h2 className='contact'>Contact me:</h2>
      <ul className='contact-info'>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </article>
  );
};

export default ContactInfo;
