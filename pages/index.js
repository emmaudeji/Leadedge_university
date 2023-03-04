import Head from "next/head";
import Image from "next/image";
import Devmode from "@/components/devmode";

export default function Home() {
  return (
    <>
      <main className={""}>
        <h1 className="heading2 section-container text-zinc-500 h-[40vh] justify-center text-center border-b border-zinc-300">
          Welcome to Leadedge University
        </h1>
        <Devmode />
      </main>
    </>
  );
}
