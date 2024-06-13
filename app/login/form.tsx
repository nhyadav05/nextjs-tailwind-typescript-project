// "use client";

// import { Alert } from "@/components/ui/alert";
// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Correct import statement
// import Link from "next/link";

// export const LoginForm  : React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     // try {
//     //   const response = await fetch("/api/login", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({ email, password }),
//     //   });

//     //   if (response.ok) {
//     //     router.push("/register"); // Navigate to dashboard on successful login
//     //   } else {
//     //     const data = await response.json();
//     //     setError(data.message);
//     //   }
//     // } catch (error) {
//     //   console.error("Error:", error);
//     //   setError("An error occurred. Please try again later.");
//     // }
//     router.push("/register");
//   };
//   return (
//     <form
//       onSubmit={onSubmit}
//         className="flex flex-col items-center space-y-6 max-w-md px-8 py-6 mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg sm:w-[800px]"
//     >
//       <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
//       <div className="w-full">
//         <label
//           htmlFor="email"
//           className="block mb-1 text-sm font-medium text-gray-700"
//         >
//           Email
//         </label>
//         <input
//           className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           id="email"
//           type="email"
//         />
//       </div>
//       <div className="w-full">
//         <label
//           htmlFor="password"
//           className="block mb-1 text-sm font-medium text-gray-700"
//         >
//           Password
//         </label>
//         <input
//           className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           id="password"
//           type="password"
//         />
//       </div>
//       {error && <Alert>{error}</Alert>}
//       <button
//         className="inline-flex items-center justify-center w-full h-11 px-8 text-sm font-medium text-white bg-indigo-900 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
//         type="submit"
//       >
//         Login
//       </button>
//       <p className="text-center text-black  ">
//           Need to create an account?{" "}
//           <Link href="/register" className="text-indigo-500 hover:underline">
//             Create Account
//           </Link>
//         </p>
//     </form>
//   );
// };

"use client";

import { Alert } from "@/components/ui/alert";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center space-y-6 max-w-md px-6 py-6 mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow-lg"
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
        type="submit"
      >
        Login
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
