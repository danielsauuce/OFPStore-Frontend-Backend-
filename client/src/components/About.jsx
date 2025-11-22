import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#31261c]">
              Craftsmanship that Lasts Generations
            </h2>

            <p className="text-[#5c5044] mb-6 leading-relaxed">
              Since 1995, Olayinka Furniture Palace has been dedicated to creating exceptional
              furniture pieces that stand the test of time. Our skilled artisans combine traditional
              techniques with contemporary design to deliver furniture that tells a story.
            </p>

            <p className="text-[#5c5044] mb-8 leading-relaxed">
              Every piece is carefully crafted using premium materials, ensuring durability,
              comfort, and timeless elegance for your home.
            </p>

            <Link to="/about">
              <button className="px-6 py-3 bg-[#815331] text-white rounded-md font-medium hover:bg-[#6b4529] transition">
                Learn More About Us
              </button>
            </Link>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80"
              alt="Furniture craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
