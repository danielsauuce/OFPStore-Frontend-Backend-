import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

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

const categories = ['All', 'Sofas', 'Tables', 'Chairs', 'Beds', 'Storage'];

const Shop = ({ products = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('newest');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id); // assume higher ID = newer
        break;
    }

    return result;
  }, [products, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8 text-foreground">Shop Furniture</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-card">
              <h3 className="font-semibold text-lg mb-4 text-card-foreground">Filters</h3>

              {/* Categories */}
              <div className="mb-6">
                <label className="mb-3 block font-semibold text-card-foreground">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded transition-colors ${
                        selectedCategory === category
                          ? 'bg-[#815331] text-white'
                          : 'bg-muted text-muted-foreground hover:bg-green-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="mb-3 block font-semibold text-card-foreground">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 accent-[#815331]"
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sorting */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <p className="text-muted-foreground">
                Showing {filteredAndSortedProducts.length}{' '}
                {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort" className="text-card-foreground font-medium">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-lg px-4 py-2 bg-card text-card-foreground focus:outline-none focus:ring-2 focus:ring-[#815331]"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard products={furnitureItems} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
