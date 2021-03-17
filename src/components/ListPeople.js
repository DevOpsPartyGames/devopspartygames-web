import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListPeople( {props}) {


  
  return (
    <StaticQuery
      query={graphql`
      query AllPeopleQuery {
        allPeopleJson(sort: {fields: name, order: ASC}) {
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
        <>
          {data.allPeopleJson.nodes.map(person => 
          {
              return (
                <article class = "post post-card">
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
                        <h3 class = "post-title">
                          <a 
                            href = {safePrefix(`person/${person.id}`)}
                            rel = "bookmark"
                          >
                            {person.name}
                          </a>
                        </h3>
                      </header>
                      {/* <div class = "post-excerpt">
                        <EpisodeSubtitle
                          eventDate={episode.date}
                          timeZone={episode.region}
                        />
                      </div> */}
                    </div>

                  </div>

                </article>
              )
          }
          )}
        </>
      )}


    />
  )

}