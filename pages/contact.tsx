import { Fragment } from 'react';
import Nav from '../atomic/atoms/Nav/Nav.component';
import ContactSection from '../atomic/organisms/ContactSection/ContactSection.component';
import Footer from '../atomic/organisms/Footer/Footer.component';
import { client } from '../lib/client';
import { IContactProps } from '../utils/types';

interface IContactContentProps {
  contactProps: IContactProps;
}

const Contact: React.FC<IContactContentProps> = ({ contactProps }) => {
  return (
    <Fragment>
      <Nav />
      <ContactSection content={contactProps} />
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps = async () => {
  const contactProps = await client.fetch('*[_type == "contact"]');

  return {
    props: {
      contactProps: contactProps[0],
    },
  };
};

export default Contact;
