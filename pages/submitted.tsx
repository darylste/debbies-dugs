import React, { Fragment } from 'react';
import ThankYou from '../atomic/molecules/ThankYou/ThankYou.component';
import Head from 'next/head';

const Submitted: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <meta
          name='title'
          content="Debbie's Dugs - Thank you for reaching out"
        />
        <meta
          name='description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='www.daryl-stensland.com/' />
      </Head>
      <ThankYou />
    </Fragment>
  );
};

export default Submitted;
