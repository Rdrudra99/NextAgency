import { Globe, Zap, TrendingUp, Code2, CalendarCheck, IndianRupee, ArrowUpRight } from 'lucide-react';
import React from "react";

const featuresData = [
  {
    icon: <Globe className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "SEO-Optimized for India",
    desc: "Built-in keyword research, schema markup & zero Core Web Vitals errors.",
    delay: "0.1",
  },
  {
    icon: <Zap className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "Blazing Fast Performance",
    desc: "Next.js/React landing pages with 95+ Google Speed Scores.",
    delay: "0.2",
  },
  {
    icon: <TrendingUp className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "Conversion-First Design",
    desc: "UX that outperforms templates (proven by A/B tests).",
    delay: "0.3",
  },
  {
    icon: <Code2 className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "Full-Stack Ready",
    desc: "APIs, auth, databases? We handle backend too.",
    delay: "0.4",
  },
  {
    icon: <CalendarCheck className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "Fixed Timelines",
    desc: "No endless revisions. Delivered on time, every time.",
    delay: "0.5",
  },
  {
    icon: <IndianRupee className="text-[#ff4f01] mx-auto h-[50px] w-[50px]" />,
    title: "Transparent Pricing",
    desc: "Flat project fees—no hourly billing surprises.",
    delay: "0.6",
  },
];

const Features = () => {
  return (
    <section id="features" className="lg:pt-25 pt-15">
      <div className="container">
        <div
          className="text-center pb-15 fadeInUp"
          data-delay="0.2"
          style={{ transform: "translate(0px, 0px)" }}
        >
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]">
            <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
            <span>Features</span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black font-medium">
            Our Tech-Powered Landing Page Features
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            No half-baked templates. Just custom-built landing pages designed to convert
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
              data-delay={feature.delay}
              style={{ transform: "translate(0px, 0px)" }}
            >
              <div>
                {feature.icon}
                <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                  {feature.title}
                </h4>
                <p className="lg:text-lg text-base font-medium">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
