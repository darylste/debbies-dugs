import Nav from '../atomic/atoms/Nav/Nav.component';
import Hero from '../atomic/molecules/Hero/Hero.component';

import ServicesSection from '../atomic/organisms/ServicesSection/ServicesSection.component';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ServicesSection />
    </div>
  );
}
