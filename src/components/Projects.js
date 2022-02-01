import React from "react";
import Title from "./Title";
import Project from "./Project";
import Link from "next/link";
export default function Projects() {
  return (
    <section className="section projects">
      <Title title="projects" />
      <div className="section-center projects-center">
        <Project />
        <Project />
        <Project />
      </div>
      <Link href="/Projects" className="btn center-btn">
        <a className="btn center-btn">projects</a>
      </Link>
    </section>
  );
}
