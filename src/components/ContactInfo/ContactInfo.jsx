const ContactInfo = ({ phone, email }) => {
  return (
    <article>
      <h2>Contact Information</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </article>
  );
};

export default ContactInfo;
