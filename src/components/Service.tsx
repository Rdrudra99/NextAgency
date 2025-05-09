import { ArrowUpRight } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <section id="services" className="lg:pt-25 pt-15">
      <div className="container mx-auto">
        <div
          className="text-center pb-15 fadeInUp"
          data-delay="0.2"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
          }}
        >
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
            <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
            <span>Service</span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            Apps, websites &amp; branding
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Get expert solutions for every design need
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="col-lg-4 col-md-6">
            <div
              className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] fadeInUp"
              data-delay="0.2"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="mb-10">
                <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                  Product Design
                </h4>
                <p className="lg:text-lg text-base font-medium lg:leading-7">
                  Our subscription-based design service gives you access to a
                  dedicated team.
                </p>
              </div>
              <img
                src="https://designpro-html.vercel.app/assets/images/services/service1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] fadeInUp"
              data-delay="0.4"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="mb-10">
                <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                  Graphic Design
                </h4>
                <p className="lg:text-lg text-base font-medium lg:leading-7">
                  Why settle for one designer when you can have a dedicated team
                </p>
              </div>
              <img
                src="https://designpro-html.vercel.app/assets/images/services/service2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] fadeInUp"
              data-delay="0.6"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="mb-10">
                <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                  Marketing Design
                </h4>
                <p className="lg:text-lg text-base font-medium lg:leading-7">
                  How our subscription-based design service with a team
                </p>
              </div>
              <img
                src="https://designpro-html.vercel.app/assets/images/services/service3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
