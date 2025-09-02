import Hero from "@/components/Hero";
import RecentWork from "@/components/RecentWork";
import Logocloude from "@/components/Logocloude";
import About from "@/components/About";
import Workprocess from "@/components/Workprocess";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonial";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Booknow from "@/components/Booknow";
import OptimizedBlogSection from "@/components/blog/OptimizedBlogSection";
// this is the page for adding components and all other things to maintain clean code 
export default function Home() {
  return (
    <>
      <Hero />
      <RecentWork />
      <Logocloude />
      <About />
      <Workprocess />
      <Service />
      {/* <Projects /> */}
      <Testimonials />
      <Features />
      <OptimizedBlogSection />
      <Pricing />
      <Faq />
      <Booknow />
    </>
  );
}




