import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
// import { graphql } from "gatsby"
import Title from "../components/Title";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <h2>about page</h2>;
    </>
  );
}
