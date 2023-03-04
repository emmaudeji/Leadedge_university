import Head from "next/head";
import Image from "next/image";
import Devmode from "@/components/devmode";
import HeroBanner from "@/components/containers/HeroBanner";
import WhyLU from "@/components/containers/WhyLU";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyLU />
    </>
  );
}
