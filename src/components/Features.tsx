import { ArrowUpRight, Globe, PenTool, Palette, DollarSign, Award, RefreshCw } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section id="features" className="lg:pt-25 pt-15">
      <div className="container">
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
            <span>Features</span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black font-medium">
            Membership benefits
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Perks so good you'll never need to go anywhere else for your design.
            Seriously.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5">
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.1"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <Globe className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                Unlimited requests
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Unlimited desgin requests, prioritized by your needs
              </p>
            </div>
          </div>
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.2"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <PenTool className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                Lightning fast
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Tasks delivered in just 1-2 working business days.
              </p>
            </div>
          </div>
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.3"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <Palette className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                No contracts
              </h4>
              <p className="lg:text-lg text-base font-medium">
                No contracts. Cancel your subscription at any time.
              </p>
            </div>
          </div>
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.4"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <DollarSign className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                No extra Charges
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Just fixed monthly subscription; No extra charges or fees.
              </p>
            </div>
          </div>
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.5"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <Award className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                Top-notch quality
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Access incredible design quality whenever you need it.
              </p>
            </div>
          </div>
          <div
            className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
            data-delay="0.6"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <div>
              <RefreshCw className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />
              <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                Risk-free Revisions
              </h4>
              <p className="lg:text-lg text-base font-medium">
                Revise until 100% satisfied without any extra cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
