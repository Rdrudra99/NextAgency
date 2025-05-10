import React from "react";
import Link from "next/link";
import Image from "next/image";
const Why2meLogo = () => {
  return (
    <Link href="/" className="flex items-center space-x-1">
      <Image
        src="/logo.svg"
        alt="logo"
        width={25}
        height={25}
        className="text-[#ff4f01]"
      />
      <h2 className="lg:max-w-[160px] max-w-[120px] font-bricolage text-black md:text-3xl text-xl font-extrabold">
        Why2Me
      </h2>
    </Link>
  );
};

export default Why2meLogo;
