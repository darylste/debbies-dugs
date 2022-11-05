import { Fragment } from 'react';
import Nav from '../atomic/atoms/Nav/Nav.component';
import ContactSection from '../atomic/organisms/ContactSection/ContactSection.component';
import Footer from '../atomic/organisms/Footer/Footer.component';

const Contact = () => {
  return (
    <Fragment>
      <Nav />
      <ContactSection />
      <Footer />
    </Fragment>
  );
};

export default Contact;
