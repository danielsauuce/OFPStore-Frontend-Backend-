import React from "react";
import Navbar from "../components/Navbar";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Features from "../components/Features";

const Home = () => {
  const heroImage = "/Heroimg.avif";
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navbar />

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 ">
          <img
            src={heroImage}
            alt="Luxury furniture showroom"
            className="w-full h-full object-cover opacity-71"
          />
        </div>


        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance text-[#31261c]">
              Elevate Your Living Space
            </h1>
            <p className="text-xl text-muted text-[#EEEAE4] mb-8">
              Discover timeless furniture pieces crafted with precision and
              passion. Transform your house into a home with our curated
              collections.
            </p>

            <Link to="/shop">
              <div className="flex">
                <button className="rounded-xl bg-[#815331] text-white flex p-4 items-center cursor-pointer">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Link>

          </div>
        </div>
      </section>

      <Features/>
    </div>
  );
};

export default Home;
