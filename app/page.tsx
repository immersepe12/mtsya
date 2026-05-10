import './landing.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import TheFive from './components/TheFive';
import Letter from './components/Letter';
import Cloth from './components/Cloth';
import Tenets from './components/Tenets';
import Story from './components/Story';
import Said from './components/Said';
import Letters from './components/Letters';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statement />
        <TheFive />
        <Letter />
        <Cloth />
        <Tenets />
        <Story />
        <Said />
        <Letters />
      </main>
      <Footer />
    </>
  );
}
