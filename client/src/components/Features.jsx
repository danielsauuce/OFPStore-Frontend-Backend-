import React from "react";

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
    category: "Shelves",
    title: "Contemporary Bookshelf",
    price: 699.99,
    image:
      "https://images.unsplash.com/photo-1598300042247-7c788e6b7a1a?auto=format&fit=crop&w=800&q=80",
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
            <h2>Featured Collection</h2>
            <p>Handpicked pieces that blend functionality with exceptional design</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
