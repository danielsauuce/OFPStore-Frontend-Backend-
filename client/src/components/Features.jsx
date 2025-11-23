import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const furnitureItems = [
  {
    id: 1,
    category: 'Sofas',
    title: 'Classic Leather Sofa',
    price: 1299.99,
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'Tables',
    title: 'Modern Dining Table',
    price: 899.99,
    image:
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'Chairs',
    title: 'Ergonomic Office Chair',
    price: 449.99,
    image:
      'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'Beds',
    title: 'Luxury Upholstered Bed',
    price: 1599.99,
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Chairs',
    title: 'Minimalist Lounge Chair',
    price: 799.99,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'Tables',
    title: 'Rustic Coffee Table',
    price: 349.99,
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80',
  },
];

const Features = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#F8F5EE,#EEE9E0)] py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
            Featured Collection
          </h2>
          <p className="max-w-2xl mx-auto text-[hsl(25_25%_20%)]">
            Handpicked pieces that blend functionality with exceptional design
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furnitureItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/shop">
            <button className="px-6 py-3 bg-white text-[hsl(25_45%_35%)] border-2 border-[hsl(25_45%_35%)] rounded-md shadow hover:bg-[hsl(25_45%_35%)] hover:text-white transition">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
