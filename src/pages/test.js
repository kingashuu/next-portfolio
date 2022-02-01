import React from "react";
import axios from "axios";
// import { } from "@apollo/client";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function test({ jobs }) {
  console.log({ jobs });
  return <ul></ul>;
}

export async function getStaticProps() {
  const client = new ApolloClient({
    url: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });
  const data = await client.query({
    query: gql`
      query {
        jobs {
          data {
            id
            attributes {
              company
              title
              date
              desc {
                id
                name
              }
            }
          }
        }
      }
    `,
  });
  // const res = await fetch(`http://localhost:1337/api/jobs?populate=*`);
  // const jobs = await res.json();

  return {
    props: {
      jobs: data,
    }, // will be passed to the page component as props
  };
}

export default test;
