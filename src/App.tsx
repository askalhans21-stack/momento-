import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CategorySection from '@/components/CategorySection';
import RepairSection from '@/components/RepairSection';
import AboutSection from '@/components/AboutSection';
import PaymentSection from '@/components/PaymentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { CATEGORIES } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {CATEGORIES.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}
        <RepairSection />
        <AboutSection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
