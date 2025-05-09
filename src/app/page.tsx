import Image from "next/image";
import Hero from "@/components/Hero";
import RecentWork from "@/components/RecentWork";
import Logocloude from "@/components/Logocloude";
import About from "@/components/About";
import Workprocess from "@/components/Workprocess";
import Service from "@/components/Service";

import { Bricolage_Grotesque } from "next/font/google";
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <Hero />
      <RecentWork />
      <Logocloude />
      <About />
      <Workprocess />
      <Service />
    </>
  );
}
