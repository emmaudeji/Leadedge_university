import Head from "next/head";
import Image from "next/image";
import Devmode from "@/components/devmode";
import HeroBanner from "@/components/containers/HeroBanner";
import WhyLU from "@/components/containers/WhyLU";
import LeadedgePhilosopy from "../components/containers/LeadedgePhilosopy";
import SearchCourses from "../components/containers/searchCourses";
import Classroom from "@/components/containers/Classroom";
import Services from "@/components/containers/Services";
import NewsContainer from "@/components/news/NewsContainer";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyLU />
      <SearchCourses />
      <LeadedgePhilosopy />
      <Classroom />
      <Services />
      <NewsContainer />
    </>
  );
}
