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
        <article class = "card">
          {data.allPeopleJson.nodes.map(person => 
          {
            if (person.id===personID){
              return (
                <div>
                <a 
                  href = {safePrefix(`person/${person.id}`)}
                >
                  <img 
                    src = {safePrefix(`/images/people/${person.image}`)}
                    alt = {person.name}
                    class = "player-thumbnail"
                  />
                </a>
                <div class = "card-content player-name">
                  {person.name}<br />
                  <a 
                    href = {`https://twitter.com/${person.twitter}`}
                    class = "card-content"
                  >
                  {`@${person.twitter}`}
                </a>
                </div>

                </div>
              )
            } 
          }
          )}
        </article>
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