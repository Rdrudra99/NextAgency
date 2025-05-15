"use client";

import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Font optimization
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Improve font loading performance
  variable: "--font-bricolage", // For CSS variable usage
});

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`lg:pt-48 pt-28 container mx-auto ${bricolage.className}`}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="md:w-4/5 lg:w-2/3 mx-auto text-center relative"
        >
          {/* Badge */}
          <motion.h3
            variants={fadeInUp}
            className="border border-zinc-300 py-2.5 px-5 rounded-3xl text-sm md:text-base inline-flex items-center gap-1.5 font-normal mb-2"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="h-4 w-4 text-[#ff4f01]" />
            </motion.span>
            <span>No contracts. No hidden fees. Work with us on your terms</span>
          </motion.h3>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className={`lg:py-2.5 py-5 font-semibold xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] font-bricolage-600 text-black`}
          >
            Create Landing Pages for Indian Brands Using Modern Stack
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-7 mb-2 max-w-2xl mx-auto text-black"
          >
            Fast, SEO-friendly landing pages that convert. Built by India’s web experts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#pricing"
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white"
            >
              See Pricing Plans
            </Link>
            <Link
              href="tel:+918249598763" // Replace with your actual Indian phone number (starting with +91)
              className="btn bg-black text-white border-black-200 hover:bg-gray-800 transition-colors"
            >
              Book a free call
            </Link>
          </motion.div>

          {/* Shape 1 */}
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute lg:right-[-25%] top-1/2 right-0 hidden md:block"
          >
            <Image
              src="/shape1.webp"
              alt="Shape"
              width={300}
              height={300}
              className="lg:w-72 w-16"
              priority={false}
            />
          </motion.div>

          {/* Shape 2 */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="absolute lg:-left-[30%] top-[10%] left-0 hidden md:block"
          >
            <Image
              src="/shape2.webp"
              alt="Shape"
              width={200}
              height={200}
              className="lg:w-48 w-12"
              priority={false}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
