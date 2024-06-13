import Image from "next/image";
import { LoginForm } from "./login/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
      <LoginForm />
    </main>
  );
}
