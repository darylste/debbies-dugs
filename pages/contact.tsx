import { Fragment } from 'react';
import Nav from '../atomic/atoms/Nav/Nav.component';
import ContactSection from '../atomic/organisms/ContactSection/ContactSection.component';
import Footer from '../atomic/organisms/Footer/Footer.component';
import Head from 'next/head';
import { client } from '../lib/client';
import { IContactProps } from '../utils/types';

interface IContactContentProps {
  contactProps: IContactProps;
}

const Contact: React.FC<IContactContentProps> = ({ contactProps }) => {
  return (
    <Fragment>
      <Head>
        <meta name='title' content="Debbie's Dugs - Contact Page" />
        <meta
          name='description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta
          name='keywords'
          content='Dog Walking, Glasgow Dog Walker, Dog Boarding, Doggy Day Care, Dog Walker Glasgow, East End Glasgow Dog walker, Dog walker Glasgow east end, contact page, get in touch, help'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='www.daryl-stensland.com/' />
      </Head>
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
