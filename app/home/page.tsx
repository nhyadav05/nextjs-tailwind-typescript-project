"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ProductSlide from "@/components/productSlide";
import Product from "@/components/product";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-auto py-20 px-2">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to My Website
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple homepage built using Tailwind CSS, TypeScript, and
        Next.js.
      </p>
      <ProductSlide />
      <Product />
    </div>
  );
};

export default Home;
