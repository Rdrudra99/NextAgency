import { ArrowUpRight, ArrowRight, Video } from "lucide-react";
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
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0px, 0px)",
            }}
          >
            <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
              <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
              <span>Pricing</span>
            </h3>
            <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
              Membership
            </h2>
            <p className="md:text-xl md:leading-7 text-base mt-2">
              Pick the plan that suits your needs the most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 justify-center gap-6">
            <div
              className="pricing-item p-2.5 rounded-xl border border-primary fadeInUp"
              data-delay="0.2"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="pricing-header p-5 border-b border-b-primary">
                <h4 className="title px-5 py-2.5 rounded-[20px] font-medium leading-[19px] inline-block bg-black text-white">
                  Standard
                </h4>
                <p className="price text-[38px] font-medium font-bricolage text-primary mt-5">
                  $3,999
                  <span className="text-base text-black-100 font-normal capitalize">
                    /month
                  </span>{" "}
                </p>
                <p className="save-percent text-lg leading-7 mb-5 mt-1">
                  One request at a time. Pause or cancel anytime.
                </p>
              </div>
              <div className="pricing-details p-5">
                <ul className="flex flex-col gap-2.5 mb-[22px]">
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>One request at a time</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Unlimited brands</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>1-2 day revisions</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Weekly sync calls</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Private Slack channel</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Perfect for smaller teams &amp; startups</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white flex items-center justify-center gap-2"
                >
                  Book a 30-min call
                  <Video className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div
              className="pricing-item p-2.5 rounded-xl border border-primary fadeInUp"
              data-delay="0.4"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
              }}
            >
              <div className="pricing-header p-5 border-b border-b-primary">
                <h4 className="title px-5 py-2.5 rounded-[20px] font-medium leading-[19px] inline-block bg-primary">
                  Premium
                </h4>
                <p className="price text-[38px] font-medium font-bricolage text-primary mt-5">
                  $5,999
                  <span className="text-base text-black-100 font-normal capitalize">
                    /month
                  </span>
                </p>
                <p className="save-percent text-lg leading-7 mb-5 mt-1">
                  Double the requests. Pause or cancel anytime.
                </p>
              </div>
              <div className="pricing-details p-5">
                <ul className="flex flex-col gap-2.5 mb-[22px]">
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Two requests at a time</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Unlimited brands</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Priority support &amp; delivery</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Weekly sync calls</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Private Slack channel</span>
                  </li>
                  <li className="text-[rgb(119,119,125)] text-lg flex items-start">
                    <ArrowRight className="mr-2.5 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>Perfect for larger teams &amp; enterprises</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white flex items-center justify-center gap-2"
                >
                  Book a 30-min call
                  <Video className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
