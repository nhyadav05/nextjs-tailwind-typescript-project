"use client";

import { Alert } from "@/components/alert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(false)
    router.push("/home");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center space-y-6 max-w-md px-20 py-16 mx-auto bg-gray-100 border  rounded-lg shadow-lg "
    >
      <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <button
        className="inline-flex items-center justify-center w-full h-11 px-8 text-sm font-medium text-white bg-indigo-900 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
        type="submit" disabled={isLoading}
      >
       {isLoading ? 'Loading...' : 'Login'}
      </button>
      <p className="text-center text-black  ">
        Need to create an account?{" "}
        <Link className="text-indigo-500 hover:underline" href="/register">
          Create Account
        </Link>{" "}
      </p>
    </form>
  );
};
