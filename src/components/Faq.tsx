"use client";
import { ArrowUpRight, Video, Plus, Minus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How secure is my financial data on your platform?",
    answer:
      "Your financial data is protected by enterprise-grade security measures, including end-to-end encryption and secure authentication protocols. We comply with all industry standards and regulations to ensure your information remains confidential and secure at all times.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Our subscription model is straightforward. Choose a plan that fits your needs, make a monthly payment, and gain immediate access to our design services. You can submit requests through our platform, and we'll start working on them according to your plan's priority level. You can pause or cancel your subscription anytime without hidden fees.",
  },
  {
    question: "How much do your plans cost?",
    answer:
      "Our Standard plan starts at $3,999 per month for one request at a time, while our Premium plan costs $5,999 per month for two simultaneous requests and priority support. Both plans include unlimited revisions and brands. Custom enterprise plans are also available for larger teams with specific needs.",
  },
  {
    question: "How quickly can You deliver designs for our business?",
    answer:
      "Most designs are delivered within 1-2 business days after submission. For more complex projects, we'll provide a clear timeline during our initial consultation. Premium plan subscribers receive priority treatment, often getting their designs even faster.",
  },
  {
    question: "Can I request revisions to the designs provided?",
    answer:
      "Absolutely! Unlimited revisions are included in all our subscription plans. We work with you until you're 100% satisfied with the final result, making any necessary adjustments based on your feedback without additional charges.",
  },
  {
    question: "What types of designs does Designpro specialize in?",
    answer:
      "We specialize in a wide range of design services including website design, mobile app interfaces, branding, logos, marketing materials, social media graphics, presentations, and product design. Our team has expertise across various industries and can adapt to your specific requirements.",
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="lg:pt-25 pt-15">
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
            <span>FAQs</span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium font-bricolage-500">
            Frequently Asked Questions
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Unsure about subscription design?
          </p>
        </div>

        <div className="grid lg:grid-cols-[33.33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-12.5 rounded-[15px] bg-black text-center">
            <img
              src="https://designpro-html.vercel.app/assets/images/about/founder.png"
              alt="founder"
              title="founder"
              className="max-w-[140px] max-h-[140px] mx-auto"
            />
            <h2 className="text-white lg:text-[40px] text-3xl lg:leading-[1.2] py-3">
              Book a 15-minute intro call
            </h2>
            <a
              href="#"
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white flex items-center justify-center gap-2"
            >
              Book a 30-min call
              <Video className="h-5 w-5" />
            </a>
            <p className="text-white mt-4">
              Prefer to email?{" "}
              <a href="mailto:hello@designpro.com" className="text-[#ff4f01]">
                hello@designpro.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-[15px] lg:pl-7.5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="accordion-item border border-[#ccc] rounded-[10px] overflow-hidden"
              >
                <motion.button
                  className="accordion-header w-full flex justify-between items-center lg:text-[22px] text-lg py-4 px-5 font-medium cursor-pointer font-bricolage-500"
                  onClick={() => toggleAccordion(index)}
                  initial={false}
                  whileTap={{ scale: 0.98 }}
                >
                  {faq.question}
                  {activeIndex === index ? (
                    <span className="inline-block w-[11px] h-[11px] rounded-full bg-[#ff4f01] shrink-0"></span>
                  ) : (
                    <span className="inline-block w-[11px] h-[11px] rounded-full bg-black shrink-0"></span>
                  )}
                </motion.button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: {
                          opacity: 1,
                          height: "auto",
                          marginTop: "10px",
                          marginBottom: "15px",
                        },
                        collapsed: {
                          opacity: 0,
                          height: 0,
                          marginTop: "0px",
                          marginBottom: "0px",
                        },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="px-5"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
