import React from "react";
import Image from "next/image";

// Sample array of products
const products = [
  {
    id: 1,
    name: "Ring Box",
    imageUrl: "/ring.png",
    color: "Black",
    price: 35,
  },
  {
    id: 2,
    name: "Gold Ring",
    imageUrl: "/ring-gold.png",
    color: "Gold",
    price: 45,
  },
  {
    id: 3,
    name: "Blue Ring",
    imageUrl: "/blue-ring.png",
    color: "Blue",
    price: 45,
  },
  {
    id: 4,
    name: "Silver Ring",
    imageUrl: "/ring-box.png",
    color: "Silver",
    price: 45,
  },
  // Add more products here as needed
];

const Product = () => {
  return (
    <div className="py-20 px-2 container">
      <h1 className="container font-bold text-gray-500 text-[30px]">
        Product Details
      </h1>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-10 p-5">
        {/* Map over the products array and render a card for each product */}
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center font-sans shadow-xl rounded bg-white"
          >
            <div className="overflow-hidden rounded-lg  bg-indigo-200">
              <Image
                src={product.imageUrl}
                height={500}
                width={500}
                alt={product.name}
                className="hover:scale-125 duration-1000  bg-indigo-200"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="ml-20px mr-20px">
                <h3 className="text-sm font-semibold leading-6 text-indigo-900">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0  text-indigo-900"
                    ></span>
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{product.color}</p>
              </div>
              <p className="text-sm font-semibold leading-6 text-indigo-900">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
