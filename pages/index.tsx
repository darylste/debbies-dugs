import Nav from '../atomic/atoms/Nav/Nav.component';
import Hero from '../atomic/organisms/Hero/Hero.component';
import AboutSection from '../atomic/organisms/AboutSection/AboutSection.component';
import GallerySection from '../atomic/organisms/GallerySection/GallerySection.component';
import ReviewSection from '../atomic/organisms/ReviewSection/ReviewSection.component';
import ServicesSection from '../atomic/organisms/ServicesSection/ServicesSection.component';
import Footer from '../atomic/organisms/Footer/Footer.component';

import { client } from '../lib/client';

import {
  IHeroProps,
  ICardProps,
  IAboutProps,
  IReviewSectionProps,
  sanityImg,
} from '../utils/types';
import Head from 'next/head';

interface IHomeProps {
  heroProps: IHeroProps;
  servicesProps: ICardProps[];
  aboutProps: IAboutProps;
  reviewProps: IReviewSectionProps;
  galleryProps: { title: string; images: sanityImg[] };
}

const Home: React.FC<IHomeProps> = ({
  heroProps,
  servicesProps,
  aboutProps,
  reviewProps,
  galleryProps,
}) => {
  return (
    <div>
      <Head>
        <title>Debbie&apos;s Dugs - Dog Walking, Boarding and Day Care</title>

        <meta
          name='title'
          content="Debbie's Dugs - Dog Walking, Boarding and Day Care "
        />
        <meta
          name='description'
          content='We offer a range of dog walking, boarding and daycare services in Glasgow and are fully insured and K9 first aid-trained.'
        />
        <meta
          name='keywords'
          content='Dog Walking, Glasgow Dog Walker, Dog Boarding, Doggy Day Care, Dog Walker Glasgow, East End Glasgow Dog walker, Dog walker Glasgow east end'
        />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='author' content='www.daryl-stensland.com/' />

        <link rel='shortcut icon' href='favicon.svg' type='image/x-icon' />
      </Head>
      <Nav />
      <Hero content={heroProps} />
      <ServicesSection cards={servicesProps} />
      <AboutSection content={aboutProps} />
      {/* <ReviewSection content={reviewProps} /> */}
      <GallerySection content={galleryProps} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const heroProps = await client.fetch('*[_type == "hero"]');
  const servicesProps = await client.fetch('*[_type == "services"]');
  const aboutProps = await client.fetch('*[_type == "about"]');
  // const reviewProps = await client.fetch('*[_type == "reviews"]');
  const galleryProps = await client.fetch('*[_type == "gallery"]');

  return {
    props: {
      heroProps: heroProps[0],
      servicesProps: servicesProps[0].services,
      aboutProps: aboutProps[0],
      // reviewProps: reviewProps[0],
      galleryProps: galleryProps[0],
    },
  };
};

export default Home;
