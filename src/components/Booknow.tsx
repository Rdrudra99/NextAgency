import React from "react";

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
            See if DesignPro is right for you. (It totally is.)
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get a guided tour through DesignPro, and find out how you and your
            team can change the way you source design, forever.
          </p>
          <div className="mt-7.5">
            <a
              href="#"
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white"
            >
              Book a free call
            </a>
          </div>
          <a href="#">
            <img
              src="https://designpro-html.vercel.app/assets/images/logos/logo.png"
              alt="Logo"
              title="Logo"
              className="max-w-[200px] mx-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booknow;
