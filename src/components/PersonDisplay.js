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
        <div class = "player-container">
          {data.allPeopleJson.nodes.map(person => 
          {
            if (person.id===personID){
              return (
                <div class = "player-item">
                <a 
                  href = {safePrefix(`person/${person.id}`)}
                  class = "player-episode-page"
                >
                  <img 
                    src = {safePrefix(`/images/people/${person.image}`)}
                    class = "player-episode-page"
                  />
                </a>
                <div class="player-name">{person.name}</div>
                <div class="player-name">
                  <a 
                    href = {`https://twitter.com/${person.twitter}`}
                    class = "player-episode-page"
                  >
                  {`@${person.twitter}`}
                </a>
                </div>

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