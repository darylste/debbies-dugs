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
      <Nav />
      <Hero content={heroProps} />
      <ServicesSection cards={servicesProps} />
      <AboutSection content={aboutProps} />
      <ReviewSection content={reviewProps} />
      <GallerySection content={galleryProps} />
      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const heroProps = await client.fetch('*[_type == "hero"]');
  const servicesProps = await client.fetch('*[_type == "services"]');
  const aboutProps = await client.fetch('*[_type == "about"]');
  const reviewProps = await client.fetch('*[_type == "reviews"]');
  const galleryProps = await client.fetch('*[_type == "gallery"]');

  return {
    props: {
      heroProps: heroProps[0],
      servicesProps,
      aboutProps: aboutProps[0],
      reviewProps: reviewProps[0],
      galleryProps: galleryProps[0],
    },
  };
};

export default Home;
