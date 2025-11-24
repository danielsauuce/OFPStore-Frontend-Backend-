import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { furnitureItems } from '../data/FurnitureItems';

const Features = () => {
  const featuresProduct = furnitureItems.slice(0,6)

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
          {featuresProduct.map((product) => (
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
