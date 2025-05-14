'use client';

import { ArrowUpRight, FileStack, GlobeLock, HeartHandshake } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const Workprocess = () => {
  // Refs for different sections
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  
  // Scroll-based animations
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Header animations
  const headerY = useTransform(sectionScroll, [0, 0.2], [60, 0]);
  const headerOpacity = useTransform(sectionScroll, [0, 0.2], [0, 1]);
  
  // Steps container animation
  const isStepsInView = useInView(stepsContainerRef, { 
    once: false, 
    amount: 0.1,
    margin: "0px 0px -100px 0px"
  });
  
  // Individual step animations with useInView for better performance
  const isStep1InView = useInView(step1Ref, { once: false, amount: 0.5 });
  const isStep2InView = useInView(step2Ref, { once: false, amount: 0.5 });
  const isStep3InView = useInView(step3Ref, { once: false, amount: 0.5 });
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const badgeAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };
  
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };
  
  const descriptionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3
      }
    }
  };
  
  const stepAnimation = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1],
        delay
      }
    }
  });
  
  const iconCircleAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.6
      }
    }
  };
  
  const numberBadgeAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay: 0.3
      }
    }
  };
  
  // Continuous floating animation for the shape images
  const floatingAnimation = {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section id="how" className="lg:pt-24 pt-16 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header section with scroll-based animation */}
        <motion.div
          ref={headerRef}
          style={{ 
            y: headerY, 
            opacity: headerOpacity 
          }}
          className="text-center pb-14"
        >
          {/* Badge with icon */}
          <motion.h3 
            variants={badgeAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            className="border border-zinc-300 py-2.5 px-5 rounded-3xl md:text-base text-sm inline-flex items-center gap-1.5 font-normal mb-2"
          >
            <motion.span
              animate={{
                rotate: [0, 360],
                transition: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear", 
                  repeatDelay: 2
                }
              }}
            >
              <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
            </motion.span>
            <span>Work Process</span>
          </motion.h3>
          
          {/* Main title with animation */}
          <motion.h2 
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-black font-medium md:leading-tight leading-tight"
          >
            We build. You grow.
          </motion.h2>
          
          {/* Description with animation */}
          <motion.p 
            variants={descriptionAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            className="md:text-xl text-base mt-2 max-w-2xl mx-auto"
          >
            Our process is simple, fast, and made for Indian brands.
          </motion.p>
        </motion.div>

        {/* Steps grid with staggered animations */}
        <motion.div 
          ref={stepsContainerRef}
          initial="hidden"
          animate={isStepsInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-x-6 gap-y-12 lg:pt-14 pt-8"
        >
          {/* Step 01 */}
          <motion.div 
            ref={step1Ref}
            variants={stepAnimation(0)}
            initial="hidden"
            animate={isStep1InView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center relative sm:px-6 px-0"
          >
            <motion.div 
              variants={iconCircleAnimation}
              className="lg:w-16 lg:h-16 w-12 h-12 rounded-full flex items-center justify-center border border-black/10 relative"
              whileHover={{ 
                boxShadow: "0 0 0 4px rgba(255, 79, 1, 0.15)",
                borderColor: "rgba(255, 79, 1, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  color: "#ff4f01",
                  transition: { duration: 0.3 }
                }}
              >
                <HeartHandshake className="text-2xl" />
              </motion.div>
              <motion.div 
                variants={numberBadgeAnimation}
                className="absolute -right-2 -top-2 bg-[#ff4f01] flex justify-center items-center text-white lg:w-7 lg:h-7 w-6 h-6 rounded-full"
              >
                <span className="lg:font-medium text-sm">01</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:pt-6 pt-5"
              initial={{ opacity: 0 }}
              animate={isStep1InView ? { opacity: 1, transition: { delay: 0.4 } } : { opacity: 0 }}
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep1InView ? { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="lg:text-3xl text-2xl font-bold"
              >
                Connect
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep1InView ? { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="text-lg font-medium leading-7 lg:mt-5 mt-4"
              >
                Share your goals and brand vision. We'll hop on a quick call and understand your landing page needs.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Step 02 */}
          <motion.div 
            ref={step2Ref}
            variants={stepAnimation(0.2)}
            initial="hidden"
            animate={isStep2InView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center relative sm:px-6 px-0"
          >
            <motion.div 
              className="absolute top-0 left-[-110px] opacity-50 lg:block hidden pointer-events-none"
              animate={floatingAnimation}
            >
              <Image
                src="/workprocess-shape2.png" 
                alt="Connecting shape"
                width={150}
                height={80}
              />
            </motion.div>
            <motion.div 
              variants={iconCircleAnimation}
              className="lg:w-16 lg:h-16 w-12 h-12 rounded-full flex items-center justify-center border border-black/10 relative"
              whileHover={{ 
                boxShadow: "0 0 0 4px rgba(255, 79, 1, 0.15)",
                borderColor: "rgba(255, 79, 1, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  color: "#ff4f01",
                  transition: { duration: 0.3 }
                }}
              >
                <GlobeLock className="text-2xl" />
              </motion.div>
              <motion.div 
                variants={numberBadgeAnimation}
                className="absolute -right-2 -top-2 bg-[#ff4f01] flex justify-center items-center text-white lg:w-7 lg:h-7 w-6 h-6 rounded-full"
              >
                <span className="lg:font-medium text-sm">02</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:pt-6 pt-5"
              initial={{ opacity: 0 }}
              animate={isStep2InView ? { opacity: 1, transition: { delay: 0.4 } } : { opacity: 0 }}
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep2InView ? { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="lg:text-3xl text-2xl font-bold"
              >
                Develop
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep2InView ? { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="text-lg font-medium leading-7 lg:mt-5 mt-4"
              >
                We design, build, and test your landing page using modern tech stack—fast, clean, and SEO-ready.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Step 03 */}
          <motion.div 
            ref={step3Ref}
            variants={stepAnimation(0.4)}
            initial="hidden"
            animate={isStep3InView ? "visible" : "hidden"}
            className="flex flex-col items-center text-center relative sm:px-6 px-0"
          >
            <motion.div 
              className="absolute top-0 left-[-110px] opacity-50 lg:block hidden pointer-events-none"
              animate={floatingAnimation}
            >
              <Image
                src="/workprocess-shape1.png"
                alt="Process shape"
                width={150}
                height={80}
              />
            </motion.div>
            <motion.div 
              variants={iconCircleAnimation}
              className="lg:w-16 lg:h-16 w-12 h-12 rounded-full flex items-center justify-center border border-black/10 relative"
              whileHover={{ 
                boxShadow: "0 0 0 4px rgba(255, 79, 1, 0.15)",
                borderColor: "rgba(255, 79, 1, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  color: "#ff4f01",
                  transition: { duration: 0.3 }
                }}
              >
                <FileStack className="text-2xl" />
              </motion.div>
              <motion.div 
                variants={numberBadgeAnimation}
                className="absolute -right-2 -top-2 bg-[#ff4f01] flex justify-center items-center text-white lg:w-7 lg:h-7 w-6 h-6 rounded-full"
              >
                <span className="lg:font-medium text-sm">03</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="lg:pt-6 pt-5"
              initial={{ opacity: 0 }}
              animate={isStep3InView ? { opacity: 1, transition: { delay: 0.4 } } : { opacity: 0 }}
            >
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep3InView ? { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="lg:text-3xl text-2xl font-bold"
              >
                Deliver
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isStep3InView ? { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } } : { opacity: 0, y: 20 }}
                className="text-lg font-medium leading-7 lg:mt-5 mt-4"
              >
                Final launch-ready landing page delivered with clean code, docs, and post-delivery support if needed.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workprocess;