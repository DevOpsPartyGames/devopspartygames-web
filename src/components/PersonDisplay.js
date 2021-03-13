import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default function PersonDisplay( personID, ...props) {

  return (
    <StaticQuery
      query={graphql`
        query PersonQuery {
          allPeopleJson(filter: {id: {eq: "corey.quinn"}}) {
            nodes {
              name
              twitter
            }
          }
        }
      `}
      render={data => (
        <div>
        <h1>{data.allPeopleJson.nodes.name}</h1>
        </div>
      )}


    />
  )

  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allPeopleJson(filter: {id: {eq: "corey.quinn"}}) {
  //       nodes {
  //         name
  //         twitter
  //       }
  //     }
  //   }
  // `)

//   const data = useStaticQuery(graphql`
//   query MyQuery {
//     allPeopleJson {
//       nodes {
//         name
//         twitter
//       }
//     }
//   }
  
// `)

//   return (
//     <h1>{data.allPeopleJson.nodes.name}</h1>
//   )

}