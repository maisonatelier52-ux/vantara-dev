import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RealStories from '@/components/RealStories';
import Flavours from '@/components/Flavours';
import Process from '@/components/Process';

export default function Home() {
  return (
    <main className="w-full bg-vantara-bg min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
        
        {/* Real Stories Section */}
        <RealStories />
      </div>

      {/* Flavours Section */}
      <Flavours />

      {/* Process Section */}
      <Process />
      
      {/* Footer */}
      <footer className="bg-vantara-bg text-vantara-text py-12 border-t border-vantara-text/10 text-center">
        <p className="font-semibold uppercase tracking-widest text-sm">© Vantara Creamery Clone</p>
      </footer>
    </main>
  );
}
