async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

// export async function getPreviewPostBySlug(slug) {
//   const data = await fetchAPI(
//     `
//   query PostBySlug($where: JSON) {
//     posts(where: $where) {
//       slug
//     }
//   }
//   `,
//     {
//       variables: {
//         where: {
//           slug,
//         },
//       },
//     }
//   );
//   return data?.posts[0];
// }

// export async function getAllPostsWithSlug() {
//   const data = fetchAPI(`
//     {
//       posts {
//         slug
//       }
//     }
//   `);
//   return data?.allPosts;
// }

// export async function getAllPostsForHome(preview) {
//   const data = await fetchAPI(
//     `
//     query Posts($where: JSON){
//       posts(sort: "date:desc", limit: 10, where: $where) {
//         title
//         slug
//         excerpt
//         date
//         coverImage {
//           url
//         }
//         author {
//           name
//           picture {
//             url
//           }
//         }
//       }
//     }
//   `,
//     {
//       variables: {
//         where: {
//           ...(preview ? {} : { status: "published" }),
//         },
//       },
//     }
//   );
//   return data?.posts;
// }

export async function getJobs(slug, preview) {
  const data = await fetchAPI(`query getJobs {
  query Jobs {
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
  
  
  `);
  return data;
}
