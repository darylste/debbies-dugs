import Nav from '../atomic/atoms/Nav/Nav.component';
import Hero from '../atomic/molecules/Hero/Hero.component';
import AboutSection from '../atomic/organisms/AboutSection/AboutSection.component';
import GallerySection from '../atomic/organisms/GallerySection/GallerySection.component';
import ReviewSection from '../atomic/organisms/ReviewSection/ReviewSection.component';
import ServicesSection from '../atomic/organisms/ServicesSection/ServicesSection.component';
import { GalleryImg } from '../utils/types';

const images: GalleryImg[] = [
  {
    src: '/assets/images/dog1.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog2.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog3.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog4.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog5.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog6.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog1.jpeg',
    alt: 'test img',
  },
  {
    src: '/assets/images/dog1.jpeg',
    alt: 'test img',
  },
];

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ReviewSection />
      <GallerySection imgArr={images} />
    </div>
  );
}
