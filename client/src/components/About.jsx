import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
              Craftsmanship that Lasts Generations
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Since 1995, Olayinka Furniture Palace has been dedicated to crafting exceptional
              furniture pieces that stand the test of time. Our artisans combine traditional
              woodworking with modern design to create timeless pieces.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every piece is created from premium materials, ensuring durability, comfort, and
              elegance for homes that value quality.
            </p>

            <Link to="/about">
              <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary-light">
                Learn More About Us
              </button>
            </Link>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg bg-card">
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
