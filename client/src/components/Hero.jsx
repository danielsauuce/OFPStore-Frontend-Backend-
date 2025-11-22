import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Hero() {
  const heroImage = '/Heroimg.avif';

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury furniture showroom"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance text-foreground">
            Elevate Your Living Space
          </h1>

          <p className="text-xl mb-8 text-[hsl(40_20%_96%)] drop-shadow-md">
            Discover timeless furniture pieces crafted with precision and passion. Transform your
            house into a home with our curated collections.
          </p>

          <Link to="/shop">
            <button className="rounded-xl bg-[hsl(25_45%_35%)] text-white flex items-center px-6 py-3 hover:opacity-90 transition">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
