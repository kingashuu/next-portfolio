import React from "react";
// import PropTypes from "prop-types";
import Image from "next/image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import Link from "next/link";

export default function Project() {
  return (
    <article className="project">
      {/* <div className="project-img"> */}
      <Image
        className="project-img"
        src="/images/project-2.jpg"
        alt="Picture of project"
        width={500}
        height={500}
      />
      {/* </div> */}
      <div className="project-info">
        <span className="project-number">01. </span>
        <Link href="/projects">
          <h3 className="project-slug">title</h3>
        </Link>
        <p className="project-desc">
          Four loko heirloom 90's, mustache readymade microdosing lumbersexual
          vexillologist synth. Sartorial shabby chic cloud bread, green juice
          meditation bitters before they sold out brunch. Four dollar toast
          retro pitchfork biodiesel cronut, waistcoat direct trade +1
          williamsburg cornhole. Health goth williamsburg cliche lumbersexual
          listicle small batch, cardigan franzen snackwave knausgaard poutine
          humblebrag put a bird on it godard. Godard chillwave put a bird on it
          locavore salvia echo park copper mug roof party dreamcatcher kale
          chips listicle.
        </p>
        <div className="project-stack">
          {/* {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })} */}
        </div>
        <div className="project-links">
          <a href="github">
            <FaGithubSquare className="project-icon"></FaGithubSquare>
          </a>
          <a href="url">
            <FaShareSquare className="project-icon"></FaShareSquare>
          </a>
        </div>
      </div>
    </article>
  );
}
Project.propTypes = {};
