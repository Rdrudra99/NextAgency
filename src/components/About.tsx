'use client';

import React, { useEffect } from "react";
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  // Refs for scroll animations
  const containerRef = React.useRef(null);
  const textRef = React.useRef(null);
  const highlightRef = React.useRef(null);
  const founderRef = React.useRef(null);
  
  // Viewport detection for main animation
  const controls = useAnimation();
  const isInView = useInView(containerRef, { 
    once: false, 
    amount: 0.2,
    margin: "0px 0px -100px 0px"
  });
  
  // Scroll animation values
  const { scrollYProgress: containerScroll } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: textScroll } = useScroll({
    target: textRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: highlightScroll } = useScroll({
    target: highlightRef,
    offset: ["start end", "end start"]
  });
  
  const { scrollYProgress: founderScroll } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll
  const containerY = useTransform(containerScroll, [0, 0.5], [100, 0]);
  const containerOpacity = useTransform(containerScroll, [0, 0.4], [0, 1]);
  
  const textY = useTransform(textScroll, [0, 0.6], [60, 0]);
  const textOpacity = useTransform(textScroll, [0, 0.5], [0, 1]);
  
  const highlightScale = useTransform(highlightScroll, [0, 0.7], [0.9, 1]);
  const highlightOpacity = useTransform(highlightScroll, [0, 0.6], [0, 1]);
  
  const founderY = useTransform(founderScroll, [0, 0.7], [40, 0]);
  const founderOpacity = useTransform(founderScroll, [0, 0.6], [0, 1]);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  // Main container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Highlight animation
  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };

  // Founder section animations
  const founderContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const founderItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section className="lg:pt-24 pt-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main container with scroll-based animation */}
        <motion.div
          ref={containerRef}
          style={{ 
            y: containerY, 
            opacity: containerOpacity 
          }}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="lg:w-4/5 w-full text-center mx-auto bg-black lg:py-16 lg:px-20 py-10 px-6 lg:rounded-3xl rounded-2xl relative overflow-hidden"
        >
          {/* Background decoration with parallax effect */}
          <motion.div 
            className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
            style={{
              x: useTransform(containerScroll, [0, 1], [0, -20]),
              y: useTransform(containerScroll, [0, 1], [0, -30]),
            }}
          >
            <motion.div 
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-[#ff4f01] to-transparent blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            ></motion.div>
            <motion.div 
              className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full bg-gradient-to-tr from-[#ff4f01]/40 to-transparent blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }
              }}
            ></motion.div>
          </motion.div>
          
          {/* Main text content with scroll animation */}
          <motion.h3 
            ref={textRef}
            style={{ 
              y: textY, 
              opacity: textOpacity 
            }}
            variants={textVariants} 
            className="md:text-3xl md:leading-tight text-2xl leading-9 text-white font-medium relative z-10"
          >
            At Why2Me.com, we help Indian brands build modern, high-converting
            landing pages that are fast, mobile-friendly, and optimized for SEO.{" "}
            <motion.span 
              ref={highlightRef}
              style={{ 
                scale: highlightScale, 
                opacity: highlightOpacity 
              }}
              whileHover={{ 
                color: "#ffa080",
                transition: { duration: 0.3 }
              }}
              className="text-[#ff4f01] inline-block"
            >
              Our designs aren't just pretty; they drive results.
            </motion.span>{" "}
            We bring your vision to life with the latest tech stack, ensuring
            that your business stands out in the digital world.
          </motion.h3>
          
          {/* Founder section with scroll animation */}
          <motion.div 
            ref={founderRef}
            style={{ 
              y: founderY, 
              opacity: founderOpacity 
            }}
            variants={founderContainerVariants}
            className="pt-12 flex flex-col items-center relative z-10"
          >
            <motion.div 
              variants={imageVariants}
              whileInView={{
                boxShadow: ["0 0 0px rgba(255, 79, 1, 0)", "0 0 20px rgba(255, 79, 1, 0.5)", "0 0 5px rgba(255, 79, 1, 0.3)"],
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255, 79, 1, 0.7)",
                transition: { duration: 0.3 }
              }}
              className="rounded-full overflow-hidden border-2 border-[#ff4f01] p-0.5"
            >
              <Image
                src="/Rdrudra99.webp"
                alt="founder"
                width={80}
                height={80}
                className="rounded-full"
              />
            </motion.div>
            
            <motion.h2 
              variants={founderItemVariants}
              whileInView={{
                x: [0, 0],
                transition: { duration: 0.5 }
              }}
              className="pt-2.5 lg:text-3xl text-2xl text-white font-bold"
            >
              @Rdrudra99
            </motion.h2>
            
            <motion.p 
              variants={founderItemVariants}
              className="text-white text-lg opacity-80"
            >
              Founder of Why2Me.com
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;