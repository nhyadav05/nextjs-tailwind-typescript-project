// page.tsx
import RootLayout from "./layout";
import { LoginForm } from "./login/form";

const Home: React.FC = () => {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
        <LoginForm />
      </main>
    </RootLayout>
  );
}
export default Home;