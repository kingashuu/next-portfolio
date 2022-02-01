import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio Using Next js</title>
      </Head>
      <Hero />
      <Services />
      <Jobs />
      <Projects />
    </>
  );
}
