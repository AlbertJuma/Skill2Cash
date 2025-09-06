import Header from '../components/Header';
import Hero from '../components/Hero';
import FocusAreas from '../components/FocusAreas';
import Safeguards from '../components/Safeguards';
import Impact from '../components/Impact';
import PartnerWithUs from '../components/PartnerWithUs';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FocusAreas />
        <Safeguards />
        <Impact />
        <PartnerWithUs />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;