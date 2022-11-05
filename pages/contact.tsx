import { Fragment } from 'react';
import Nav from '../atomic/atoms/Nav/Nav.component';
import { EmailForm } from '../atomic/molecules/EmailForm/EmailForm.component';
import Footer from '../atomic/organisms/Footer/Footer.component';

const Contact = () => {
  return (
    <Fragment>
      <Nav />
      <EmailForm />
      <Footer />
    </Fragment>
  );
};

export default Contact;
