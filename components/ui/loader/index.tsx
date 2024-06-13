import Image from "next/image";
import React from "react";

export default function Loader() {
  return (
    // <div className="flex justify-center items-center w-screen h-screen ">
    <div>
      <Image src="/Spinner.gif" alt="spinner" width={40} height={40} />
    </div>
  );
}
