import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contacts from '@/components/Contacts';

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Header />
      <Hero />
      <Portfolio />
      <Services />
      <Contacts />
    </main>
  );
}
