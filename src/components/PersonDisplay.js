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
        <article class = "post post-card">
          {data.allPeopleJson.nodes.map(person => 
          {
            if (person.id===personID){
              return (
                <div class = "post-card-inside">
                <a 
                  href = {safePrefix(`person/${person.id}`)}
                  class = "post-card-thumbnail"
                >
                  <img 
                    src = {safePrefix(`/images/people/${person.image}`)}
                    alt = {person.name}
                    class = "thumbnail"
                  />
                </a>
                <div class = "post-card-content">
                  <header class = "post-header">
                    <h3 class = "post-title player-name">
                      <a 
                        href = {safePrefix(`person/${person.id}`)}
                        rel = "bookmark"
                      >
                        {person.name}
                      </a>
                      <br />
                      <a 
                        href = {`https://twitter.com/${person.twitter}`}
                        class = "player-twitter"
                      >
                        {`@${person.twitter}`}
                      </a>
                    </h3>
                  </header>

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

}