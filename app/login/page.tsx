// login.tsx
import RootLayout from "../layout";
import { LoginForm } from "./form";

const LoginPage : React.FC = ({}) => {
  return (
    <RootLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-indigo-200 ">
        <LoginForm />
      </div>
    </RootLayout>
  );
};

export default LoginPage;
