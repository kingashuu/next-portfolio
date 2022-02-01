import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../constants/socialLinks";
export default function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm ashenafi</h1>
            <h4>freelance web Designer & Developer</h4>
            <Link href="/contact">
              <a className="btn">contact me</a>
            </Link>
            <SocialLinks className="social-links"></SocialLinks>
          </div>
        </article>
        <div className="hero-img">
          <Image
            src="/images/hero-img.png"
            alt="Picture of the author"
            width={500}
            height={500}
            // layout="fill"
          />
        </div>
      </div>
    </header>
  );
}
