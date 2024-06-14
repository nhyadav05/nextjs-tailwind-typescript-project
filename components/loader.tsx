import Image from "next/image";
import React from "react";

const Loader: React.FC= ({
  
}) => {
  return (
    // <div className="flex justify-center items-center w-screen h-screen ">
    <div>
      <Image src="/Spinner.gif" alt="spinner" width={40} height={40} />
    </div>
  );
}
export default  Loader;