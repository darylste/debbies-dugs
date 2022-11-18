import React, { Fragment } from 'react';
import Spacer from '../atomic/atoms/Spcaer/Spacer.component';
import NotFound from '../atomic/molecules/NotFound/NotFound.component';
import Head from 'next/head';

const custom404: React.FC = () => {
  return (
    <Fragment>
      <Head>
        <meta name='title' content="Debbie's Dugs - Not Found 404" />
        <meta
          name='description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='www.daryl-stensland.com/' />
      </Head>
      <Spacer top='md' bottom='md' left='lg' right='lg'>
        <NotFound />
      </Spacer>
    </Fragment>
  );
};

export default custom404;
