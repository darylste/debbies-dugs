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

        <meta property='og:url' content='https://www.debbiesdugs.co.uk' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content="Debbie's Dugs - Dog Walking, Boarding and Day Care"
        />
        <meta
          property='og:description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta
          property='og:image'
          content='https://scontent.fman1-2.fna.fbcdn.net/v/t39.30808-6/306970613_10217948566499715_6211308581337947387_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O9m16pzTjVQAX8G7jur&tn=jTTb9YaGF8p5i1p9&_nc_ht=scontent.fman1-2.fna&oh=00_AfCy6eStMmsM2M3nZUSsUVO5gPcDoIAEV_fVpZbvM7FHjA&oe=638BC043'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='debbiesdugs.co.uk' />
        <meta property='twitter:url' content='https://www.debbiesdugs.co.uk' />
        <meta
          name='twitter:title'
          content="Debbie's Dugs - Dog Walking, Boarding and Day Care"
        />
        <meta
          name='twitter:description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta
          name='twitter:image'
          content='https://scontent.fman1-2.fna.fbcdn.net/v/t39.30808-6/306970613_10217948566499715_6211308581337947387_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=O9m16pzTjVQAX8G7jur&tn=jTTb9YaGF8p5i1p9&_nc_ht=scontent.fman1-2.fna&oh=00_AfCy6eStMmsM2M3nZUSsUVO5gPcDoIAEV_fVpZbvM7FHjA&oe=638BC043'
        />
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
