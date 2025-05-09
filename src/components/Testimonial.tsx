"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Why2Me transformed our business with their cutting-edge software solutions. Highly reliable and innovative!",
    imageSrc: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Aarav Gupta",
    username: "@aaravtech",
  },
  {
    text: "Their expertise in custom software development helped us scale our operations effortlessly. A game-changer!",
    imageSrc: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Priya Sharma",
    username: "@priyasharma_x",
  },
  {
    text: "Exceptional service and seamless integration. Why2Me understood our needs and delivered beyond expectations.",
    imageSrc: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Nikhil Mehta",
    username: "@nikhil_m",
  },
  {
    text: "Their team is highly skilled and responsive. The software solutions they built streamlined our entire workflow.",
    imageSrc: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Riya Patel",
    username: "@riya_works",
  },
  {
    text: "Why2Me helped us automate our processes, saving time and increasing efficiency. Absolutely recommended!",
    imageSrc: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Karan Kumar",
    username: "@karanktech",
  },
  {
    text: "Their custom-built applications are intuitive, scalable, and perfectly aligned with our business goals.",
    imageSrc: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Ananya Desai",
    username: "@ananyadesai",
  },
  {
    text: "From web development to SaaS solutions, Why2Me provided everything we needed with absolute professionalism.",
    imageSrc: "https://randomuser.me/api/portraits/men/16.jpg",
    name: "Vikram Singh",
    username: "@vikramsingh98",
  },
  {
    text: "They built a custom CRM for us that drastically improved our customer engagement. Truly innovative!",
    imageSrc: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Saanvi Yadav",
    username: "@saanvi.y",
  },
  {
    text: "Their software solutions are future-proof, easy to maintain, and highly adaptable. Best investment we made!",
    imageSrc: "https://randomuser.me/api/portraits/men/18.jpg",
    name: "Rohan Joshi",
    username: "@rohanj_tech",
  },
];

const TestimonialsColumn: React.FC<{
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}> = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={twMerge("flex flex-col pt-10", className)}
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name, username }) => (
              <div
                key={imageSrc}
                className="p-10 border border-[#bebebe] rounded-3xl  dark:border-gray-700 max-w-sm w-full my-5 shadow-lg"
                style={{
                  boxShadow: "0 4px 0 0 rgba(0, 0, 0, 0.25)",
                  transition: "all 0.5s",
                }}
              >
                <div className="text-black dark:text-gray-300 font-bricolage-400 italic text-xl">
                  {text}
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold text-[#ff4f01]  dark:text-gray-200 tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="leading-5 text-gray-600 dark:text-gray-500 tracking-tight">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="lg:pt-25 pt-15">
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
            <span>
                Testimonials
            </span>
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black font-medium font-bricolage-500">
            the best design agency
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            We are a team of designers, developers, and strategists who are
            passionate about creating beautiful and functional digital
            experiences.
          </p>
        </div>
      <div className="h-full">
        <div className="px-5 lg:px-0">
          <div className="relative max-h-[750px] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
              <TestimonialsColumn
                testimonials={testimonials.slice(0, 3)}
                duration={15}
                className="block"
              />
              <TestimonialsColumn
                testimonials={testimonials.slice(3, 6)}
                className="hidden md:block"
                duration={19}
              />
              <TestimonialsColumn
                testimonials={testimonials.slice(6, 9)}
                className="hidden lg:block"
                duration={17}
              />
                            <TestimonialsColumn
                testimonials={testimonials.slice(6, 9)}
                className="hidden lg:block"
                duration={19}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
