import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Craftsmanship that Lasts Generations
            </h2>
            <p className="text-muted-foreground mb-6">
              Since 1995, Olayinka Furniture Palace has been dedicated to creating exceptional
              furniture pieces that stand the test of time. Our skilled artisans combine traditional
              techniques with contemporary design to deliver furniture that tells a story.
            </p>
            <p className="text-muted-foreground mb-8 ">
              Every piece is carefully crafted using premium materials, ensuring durability, comfort
              and timeless elegance for your home.
            </p>
            <Link to={'/about'}>
              <button className="bg-primary text-foreground p-2 rounded"> Learn More About Us</button>
            </Link>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-elegant">
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
