import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RealStories from '@/components/RealStories';
import Flavours from '@/components/Flavours';

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
      <section id="process" className="relative min-h-screen bg-vantara-text text-vantara-bg overflow-hidden flex flex-col items-center justify-center py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">THE PROCESS</h2>
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div>
             <h3 className="text-2xl font-bold mb-4 text-vantara-accent">01. Fresh Milk</h3>
             <p className="opacity-80">Sourced directly from our own farms, ensuring the highest quality A2 milk.</p>
           </div>
           <div>
             <h3 className="text-2xl font-bold mb-4 text-vantara-accent">02. Slow Churned</h3>
             <p className="opacity-80">We take our time. Slow churning creates a denser, creamier texture you can feel.</p>
           </div>
           <div>
             <h3 className="text-2xl font-bold mb-4 text-vantara-accent">03. Real Flavours</h3>
             <p className="opacity-80">Infused with real fruits, nuts, and spices. We never use synthetic flavouring.</p>
           </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-vantara-bg text-vantara-text py-12 border-t border-vantara-text/10 text-center">
        <p className="font-semibold uppercase tracking-widest text-sm">© Vantara Creamery Clone</p>
      </footer>
    </main>
  );
}
