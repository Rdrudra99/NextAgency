import React from "react";
import Image from "next/image";
import Link from "next/link";
const Booknow = () => {
  return (
    <section id="book" className="lg:pt-25 pt-15">
      <div className="container">
        <div
          className="lg:w-[75%] mx-auto text-center lg:px-12.5 py-7.5 px-8 border border-[rgba(0,0,0,0.05)] rounded-[20px] fadeInUp"
          data-delay="0.2"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-normal font-bricolage-500">
            Is Why2Me Right for Your Brand? (Spoiler: Yes.)
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get a free tech audit—we’ll show you how modern full-stack landing pages can 2X your Indian brand’s conversions
          </p>
          <div className="mt-7.5">
            <Link
              href="tel:+918249598763" // Replace with your actual Indian phone number (starting with +91)
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white"
            >
              Book a free call
            </Link>
          </div>
          <Link href="#" className="flex justify-center items-center mt-4 space-x-1" >
            <Image
              src="/logo.svg"
              alt="logo"
              width={25}
              height={25}
              className="text-[#ff4f01]"
            />
            <h2 className="lg:max-w-[160px] max-w-[120px] font-bricolage text-black  text-xl md:text-3xl font-extrabold">
              Why2Me
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booknow;
