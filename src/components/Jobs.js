import React, { useState, useEffect, useStaticQuery } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

// async function getStaticProps(context) {
//   const res = await fetch(`http://localhost/1337/api/jobs`);
//   const jobs = await res.json();
//   console.log(jobs);
// }

const url = "https://course-api.com/react-tabs-project";
// const url = "http://localhost:1337/api/jobs?populate=*";

export default function Jobs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    // const res = await fetch(url);
    const res = await fetch(url);
    const newJobs = await res.json();
    console.log(newJobs);
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
      <Link href="/about">
        <a className="btn center-btn">more info</a>
      </Link>
    </section>
  );
}
