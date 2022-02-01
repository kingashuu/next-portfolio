import React from "react";
import socialLinks from "../constants/socialLinks";

export default function Footer() {
  return (
    <section className="section footer">
      <div>
        <div className="footer-links social-links">
          {/* {socialLinks.map((link) => {
              return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
              );
            })} */}
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> WebDev</span> all rights reserved
        </h4>
      </div>
    </section>
  );
}
