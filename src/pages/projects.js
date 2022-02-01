import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

export default function projects() {
  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <header className="projects-hero">
        <div className="section-title">
          <h1>my projects</h1>
          <div className="underline"></div>
        </div>
      </header>
      <main>
        <section className="projects-page">
          {/* <Projects title="all projects" projects={projects} /> */}
          <Projects title="all projects" />
        </section>
      </main>
    </>
  );
}
