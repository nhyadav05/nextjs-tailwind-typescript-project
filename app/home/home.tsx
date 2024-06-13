import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome to My Website
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a simple homepage built using Tailwind CSS, TypeScript, and
        Next.js.
      </p>
    </div>
  );
};

export default Home;
