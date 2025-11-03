import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const furnitureItems = [
  {
    id: 1,
    category: "Sofas",
    title: "Classic Leather Sofa",
    price: 1299.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Tables",
    title: "Modern Dining Table",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Chairs",
    title: "Ergonomic Office Chair",
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Beds",
    title: "Luxury Upholstered Bed",
    price: 1599.99,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Beds",
    title: "Luxury Upholstered Bed",
    price: 1599.99,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Beds",
    title: "Luxury Upholstered Bed",
    price: 1599.99,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  },
];

const Features = () => {
  return (
    <section className="bg-[linear-gradient(180deg,#F8F5EE,#EEE9E0)] py-20">
      <div className="mx-auto px-4 container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Featured Collection
          </h2>
          <p className="max-w-2xl mx-auto text-[#31261c]">
            Handpicked pieces that blend functionality with exceptional design
          </p>
        </div>

        <div>
          <ProductCard products={furnitureItems} />
        </div>

        <Link to={"/Shop"}>
          <div className="text-center mt-12">
            <button className="p-3 bg-[#faf8f5] hover:bg-green-800 hover:text-white shadow"> View All Product</button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Features;
