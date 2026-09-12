import Hero from "@/components/home/Hero";
import BrandMoment from "@/components/home/BrandMoment";
import WhatWeDoCascade from "@/components/home/WhatWeDoCascade";
import PortfolioFilmstrip from "@/components/home/PortfolioFilmstrip";
import SignatureAndPowerHour from "@/components/home/SignatureAndPowerHour";
import AboutSplit from "@/components/home/AboutSplit";
import TestimonialSpotlight from "@/components/home/TestimonialSpotlight";
import ServiceAreaCTA from "@/components/home/ServiceAreaCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMoment />
      <WhatWeDoCascade />
      <PortfolioFilmstrip />
      <SignatureAndPowerHour />
      <AboutSplit />
      <TestimonialSpotlight />
      <ServiceAreaCTA />
    </>
  );
}
