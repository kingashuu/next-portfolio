import React from "react";
import Title from "./Title";
import services from "../constants/services";

export default function Services() {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="service">
              {icon}
              <div className="underline"></div>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
