import RootLayout from "../layout";
import { RegisterForm } from "./form";

const LoginPage = () => {
  return (
    <RootLayout >
      <div className="h-screen w-screen flex justify-center items-center bg-indigo-200">
        <RegisterForm />
      </div>
    </RootLayout>
  );
};

export default LoginPage;
