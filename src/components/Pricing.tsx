import { ArrowUpRight, ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="lg:pt-25 pt-15">
      <div className="container mx-auto">
        <div className="lg:w-[75%] w-full mx-auto">
          <div
            className="text-center pb-15 fadeInUp"
            data-delay="0.2"
            style={{
              transform: "translate(0px, 0px)",
            }}
          >
            <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
              <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
              <span>Pricing</span>
            </h3>
            <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
              Landing Page Packages
            </h2>
            <p className="md:text-xl text-base mt-2">
              Choose the service that fits your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 justify-center gap-6">
            {/* BASIC PLAN */}
            <div
              className="pricing-item p-2.5 rounded-xl border border-primary fadeInUp"
              data-delay="0.2"
            >
              <div className="pricing-header p-5 border-b border-b-primary">
                <h4 className="title px-5 py-2.5 rounded-[20px] font-medium inline-block bg-black text-white">
                  Basic Plan
                </h4>
                <p className="price text-[38px] font-medium font-bricolage text-primary mt-5">
                  ₹9,999
                </p>
                <p className="text-lg leading-7 mb-5 mt-1">
                  One high-performance landing page with responsive design.
                </p>
              </div>
              <div className="pricing-details p-5">
                <ul className="flex flex-col gap-2.5 mb-[22px]">
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />1 Landing
                    Page (up to 6 sections)
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />
                    Responsive design + speed optimized
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />
                    On-page SEO + modern HTML tags
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />1 week
                    delivery time
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-secondary border border-primary hover:bg-black-200 hover:text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] px-[34px] py-[17px] text-[16px] font-medium leading-[20px] transition-all duration-500"
                >
                  <span>Get a Free Quote</span>
                  <Video className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* PRO PLAN */}
            <div
              className="pricing-item p-2.5 rounded-xl border border-primary fadeInUp"
              data-delay="0.4"
            >
              <div className="pricing-header p-5 border-b border-b-primary">
                <h4 className="title px-5 py-2.5 rounded-[20px] font-medium inline-block bg-primary">
                  Pro Plan
                </h4>
                <p className="price text-[38px] font-medium font-bricolage text-primary mt-5">
                  ₹19,999
                </p>
                <p className="text-lg leading-7 mb-5 mt-1">
                  For startups & founders who need everything handled.
                </p>
              </div>
              <div className="pricing-details p-5">
                <ul className="flex flex-col gap-2.5 mb-[22px]">
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />1 Premium
                    Landing Page (custom animation + 8+ sections)
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />
                    SEO-rich content (optional blog setup with Sanity)
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />
                    Fully branded UI components
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />
                    Domain + deployment support
                  </li>
                  <li className="text-primary text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5" />5 days
                    delivery + 1 week post-launch support
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-secondary border border-primary hover:bg-black-200 hover:text-white shadow-[0_4px_0_0_rgba(0,0,0,0.25)] px-[34px] py-[17px] text-[16px] font-medium leading-[20px] transition-all duration-500"
                >
                  <span>Get a Free Quote</span>
                  <Video className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
