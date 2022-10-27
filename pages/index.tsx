import Nav from '../atomic/atoms/Nav/Nav.component';
import Hero from '../atomic/molecules/Hero/Hero.component';
import ServiceCard from '../atomic/molecules/ServiceCard/ServiceCard.component';

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ServiceCard></ServiceCard>
    </div>
  );
}
