// // login.tsx
// import RootLayout from "../layout";
// import { LoginForm } from "./form";

// const LoginPage = () => {
//   return (
//     <RootLayout isAuthPage isLoginPage> {/* Pass isAuthPage and isLoginPage props */}
//       <div className="h-screen w-screen flex justify-center items-center bg-indigo-200">
//         <LoginForm />
//       </div>
//     </RootLayout>
//   );
// };

// export default LoginPage;


// login.tsx
import RootLayout from "../layout";
import { LoginForm } from "./form";

const LoginPage = () => {
  return (
    <RootLayout>
      <div className="h-screen w-screen flex justify-center items-center bg-indigo-200">
        <LoginForm />
      </div>
    </RootLayout>
  );
};

export default LoginPage;
