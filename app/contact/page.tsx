const ContactMe = () => {
  return (
    <div>
      <h1>You can reach me at</h1>
      <div>
        <h1>Email</h1>
        <p>cedricquitor.tech@gmail.com</p>
      </div>
      <div>
        <h1>Phone Number</h1>
        <p>+63 (916) 597 5656</p>
      </div>
      <div>
        <h1>Messenger</h1>
        <p>cj.quitor</p>
      </div>
    </div>
  );
};

const Socials = () => {
  return (
    <div>
      <div>
        <h1>Socials</h1>
        <h1>LinkedIn</h1>
        <h1>GitHub</h1>
        <h1>Twitter</h1>
        <h1>Instagram</h1>
        <h1>Facebook</h1>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div>
      <h1>Form</h1>
      <div>
        <h1>Contact Form</h1>
      </div>
      <div>
        <h1>Request Resume</h1>
        <p>Just leave your email and I&apos;ll get back to you</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <ContactMe />
      <Socials />
      <ContactForm />
    </div>
  );
};

export default Contact;
