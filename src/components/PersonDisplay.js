import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function PersonDisplay( {personID, ...props}) {


  
  return (
    <StaticQuery
      query={graphql`
        query PersonQuery {
          allPeopleJson {
              nodes {
                id
                name
                twitter
                image
              }
            }
        }
      `}
      render={data => (
        <div>
          {data.allPeopleJson.nodes.map(person => 
          {
            if (person.id===personID){
              return (
                <div>
                <a 
                  href = {`https://twitter.com/${person.twitter}`}
                  class = "player-episode-page"
                >
                  <img 
                    src = {safePrefix(`/images/players/${person.image}`)}
                    class = "player-episode-page"
                  />
                </a>
                <h2>{person.name}</h2>
                </div>
              )
            } 
          }
          )}
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