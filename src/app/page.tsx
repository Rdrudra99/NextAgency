import Image from "next/image";
import Hero from "@/components/Hero";
import RecentWork from "@/components/RecentWork";
import Logocloude from "@/components/Logocloude";
import About from "@/components/About";
import Workprocess from "@/components/Workprocess";
import Service from "@/components/Service";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonial";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Booknow from "@/components/Booknow";
import Foooter from "@/components/Foooter";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <RecentWork />
      <Logocloude />
      <About />
      <Workprocess />
      <Service />
      {/* <Projects /> */}
      <Testimonials />
      <Features />
      <Pricing />
      <Faq />
      <Booknow />
      <Foooter />
    </>
  );
}
