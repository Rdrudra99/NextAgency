import React from 'react'
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Hero = () => {
  return (
    <section id="home" className="lg:pt-[200px] pt-[120px] container mx-auto">
    <div className="container">
      <div
        className="md:w-[70%] mx-auto text-center relative fadeInUp"
        data-delay="0.2"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
          <i className="ri-refresh-line"></i>Subscription. Pause or cancel
          anytime
        </h3>
        <h2 className={`lg:py-2.5 py-5 font-semibold xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] ${bricolage.className} text-black-100`}>
          Hire Full-Service Design Agency For A Simple Monthly Fee.
        </h2>
        <p className="text-xl leading-7 mb-[5px] px-15 text-black-100">
          Create your products with top-tier designers at an affordable price.
          One subscription fee covers unlimited design requests.
        </p>
        <div className="mt-7.5">
          <a
            href="#pricing"
            className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white"
          >
            See Pricing Plans
          </a>
          <a
            href="#book"
            className="btn bg-black text-white border-black-200 hover:text-primary"
          >
            Book a free call
          </a>
        </div>
        <div className="absolute lg:right-[-25%] top-1/2 right-0">
          <img
            src="https://designpro-html.vercel.app/assets/images/shapes/shape1.png"
            alt="Shape"
            className="lg:max-w-[300px] max-w-[70px]"
          />
        </div>
        <div className="absolute lg:-left-[30%] top-[10%] left-0">
          <img
            src="https://designpro-html.vercel.app/assets/images/shapes/shape2.png"
            alt="Shape"
            className="lg:max-w-[200px] max-w-15"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
