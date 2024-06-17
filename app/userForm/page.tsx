"use client";
import React from "react";
import RootLayout from "../layout";
import UserForm from "./userForm";

const UserPage: React.FC = ({}) => {
  return (
       <RootLayout>
   <div className="max-w-3xl mx-auto px-6 py-12 ">      
   <div className="px-7 py-14  bg-indigo-200 rounded-md border-0 ">  
        <UserForm/>
          </div>
          </div>
       </RootLayout>
  );
};

export default UserPage;
