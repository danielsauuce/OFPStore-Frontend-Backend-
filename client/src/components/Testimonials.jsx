import { Star } from 'lucide-react';
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    rating: 5,
    comment:
      'The quality and craftsmanship of the furniture exceeded my expectations. Our living room looks absolutely stunning!',
  },
  {
    id: 2,
    name: 'Michael Ramirez',
    role: 'Interior Designer',
    rating: 4,
    comment:
      'Beautiful pieces with excellent attention to detail. My clients were impressed with how premium everything felt.',
  },
  {
    id: 3,
    name: 'Emily Carter',
    role: 'Home Decor Enthusiast',
    rating: 5,
    comment:
      'The customer service was outstanding, and the furniture fits perfectly with my minimalist style. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">Don't just take our word for it</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-card p-8 rounded-lg shadow-card hover-lift transition">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-muted-foreground italic mb-6">"{item.comment}"</p>

              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
