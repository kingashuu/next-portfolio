import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Link } from "next/link";
import SEO from "../components/SEO";

export default function Error() {
  return (
    <>
      <Head>
        <title>Error 404</title>
      </Head>
      <h2>error page</h2>;
    </>
  );
}
