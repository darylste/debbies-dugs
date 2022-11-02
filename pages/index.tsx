import Nav from '../atomic/atoms/Nav/Nav.component';
import Hero from '../atomic/organisms/Hero/Hero.component';
import AboutSection from '../atomic/organisms/AboutSection/AboutSection.component';
import GallerySection from '../atomic/organisms/GallerySection/GallerySection.component';
import ReviewSection from '../atomic/organisms/ReviewSection/ReviewSection.component';
import ServicesSection from '../atomic/organisms/ServicesSection/ServicesSection.component';
import Footer from '../atomic/organisms/Footer/Footer.component';

import { IServicesSectionProps, IFooterListProps } from '../utils/types';

// hero data
const heroProps = {
  title: 'Dog Walking, Boarding and Day Care',
  text: 'We know how special your doggo is, thats why we tail-or our experience to meet your dogs needs.',
  ctaBtnText: 'Services',
  ctaBtnLink: '/#services',
  outlineBtnText: 'Get in Touch',
  outlineBtnLink: '/contact',
  imgUrl: '/assets/illustrations/hero-image.svg',
  imgAlt: 'dog',
  imgWidth: 500,
  imgHeight: 482,
};

// Services Data
const servicesProps: IServicesSectionProps = {
  title: 'Our Services',
  cards: [
    {
      title: 'Dog Walking',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
      list: ['Item 1', 'Item 2', 'Item 3'],
      price: 10,
      rate: 'day',
    },
    {
      title: 'Doggy Day Care',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
      list: ['Item 1', 'Item 2', 'Item 3'],
      price: 22,
      rate: 'day',
    },
    {
      title: 'Boarding',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, molestiae, consequuntur.',
      list: ['Item 1', 'Item 2', 'Item 3'],
      price: 30,
      rate: 'day',
    },
  ],
};

// About Section Data
const aboutSectionProps = {
  title: 'About Us',
  // eslint-disable-next-line quotes
  intro: "Hey, I'm Debbie!",
  text: [
    // eslint-disable-next-line quotes
    "I'm a dog walker and lover, local to Glasgow's east-end. I offer a range of services and can tail-or any package for your furry-friend!",
    // eslint-disable-next-line quotes
    "I am fully insured and K9 first aid trained meaning you can rest easy sending your doggo for a day with Debbie's Dugs. Please reach out and we can explore what package suits you best.",
  ],
  btnText: 'Get in Touch',
  btnUrl: '/contact',
  imgUrl: '/assets/debbie.png',
  imgAlt: 'debbie',
};

// Review section data
const reviewSectionProps = {
  title: 'What our clients say...',
  cards: [
    {
      title: 'Amazing Service',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 4,
    },
  ],
};

// Gallery Data
const images = [
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
      <Hero {...heroProps} />
      <ServicesSection {...servicesProps} />
      <AboutSection {...aboutSectionProps} />
      <ReviewSection {...reviewSectionProps} />
      <GallerySection imgArr={images} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
