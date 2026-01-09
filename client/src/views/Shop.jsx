import { useState, useMemo } from 'react';
import { furnitureItems } from '../data/FurnitureItems';

import CategoryFilter from '../components/CategoryFilter';
import PriceRangeFilter from '../components/PriceRangeFilter';
import SortSelect from '../components/SortSelect';
import ProductGrid from '../components/ProductGrid';
import LoadMoreButton from '../components/LoadMoreButton';

const CATEGORIES = ['All', 'Sofas', 'Tables', 'Chairs', 'Beds', 'Storage'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredAndSortedProducts = useMemo(() => {
    let result = furnitureItems;

    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    result = result.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);

    const sortMap = {
      'price-low': (a, b) => a.price - b.price,
      'price-high': (a, b) => b.price - a.price,
      name: (a, b) => a.title.localeCompare(b.title),
      newest: (a, b) => b.id - a.id,
    };

    return [...result].sort(sortMap[sortBy]);
  }, [selectedCategory, priceRange, sortBy]);

  const visibleProducts = filteredAndSortedProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen py-12 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold mb-8">Shop Furniture</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6 bg-card p-6 rounded-lg shadow-card">
            <CategoryFilter
              categories={CATEGORIES}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />

            <PriceRangeFilter range={priceRange} onChange={setPriceRange} />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <p className="text-muted-foreground">
                Showing {visibleProducts.length} of {filteredAndSortedProducts.length} products
              </p>

              <SortSelect value={sortBy} onChange={setSortBy} />
            </div>

            {/* Products */}
            {visibleProducts.length ? (
              <>
                <ProductGrid products={visibleProducts} />
                <LoadMoreButton
                  hasMore={visibleCount < filteredAndSortedProducts.length}
                  onClick={handleLoadMore}
                />
              </>
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
