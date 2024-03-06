const ContactInfo = ({ phone, email }) => {
  return (
    <article>
      <h2>Contact Information</h2>
      <p>{phone}</p>
      <p>{email}</p>
    </article>
  );
};

export default ContactInfo;
