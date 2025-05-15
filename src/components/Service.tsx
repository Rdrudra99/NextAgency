"use client";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect } from "react";
import { motion, useAnimation, stagger } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Service = () => {
  // Animation controls for different sections
  const headerControls = useAnimation();
  const cardsControls = useAnimation();

  // Intersection observer to detect when elements are in view
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Start animations when elements come into view
  useEffect(() => {
    if (headerInView) {
      headerControls.start("visible");
    }
  }, [headerControls, headerInView]);

  useEffect(() => {
    if (cardsInView) {
      cardsControls.start("visible");
    }
  }, [cardsControls, cardsInView]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section id="services" className="lg:pt-25 pt-15">
      <div className="container mx-auto">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerControls}
          className="text-center pb-15"
        >
          <motion.h3
            className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-flex items-center gap-1.5 font-normal mb-[5px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowUpRight className="text-[#ff4f01] h-4 w-4" />
            <span>Service</span>
          </motion.h3>
          <motion.h2
            className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black font-medium font-bricolage-500"
            variants={headerVariants}
          >
            Apps, websites &amp; branding
          </motion.h2>
          <motion.p
            className="md:text-xl md:leading-7 text-base mt-2"
            variants={headerVariants}
          >
            Get expert solutions for every design need
          </motion.p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsControls}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "High-Converting Landing Pages",
              description:
                "Custom-built with React/Next.js for 2-3X better conversions than templates.",
              image: "/service1.jpg",
              index: 0,
            },
            {
              title: "SEO-Optimized Development",
              description:
                "Landing pages pre-loaded with schema markup, speed optimizations & Indian keyword targeting.",
              image: "/service2.jpg",
              index: 1,
            },
            {
              title: "Full-Stack Integration",
              description:
                "Add APIs, auth, or databases seamlessly—we handle frontend to backend.",
              image: "/service3.jpg",
              index: 2,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              custom={service.index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="col-lg-4 col-md-6"
            >
              <div className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] h-full">
                <div className="mb-10">
                  <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                    {service.title}
                  </h4>
                  <p className="lg:text-lg text-base font-medium lg:leading-7">
                    {service.description}
                  </p>
                </div>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
