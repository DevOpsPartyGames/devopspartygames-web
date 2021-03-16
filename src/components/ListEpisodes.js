import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'
import EpisodeSubtitle from "../components/EpisodeSubtitle"

export default function ListEpisodes( {props}) {


  
  return (
    <StaticQuery
      query={graphql`
        query MyEpisodeQuery {
          allEpisodesJson(sort: {fields: date, order: DESC}) {
            nodes {
              id
              image
              slug
              title
              date
              region
            }
          }
        }
      `}
      render={data => (
        <>
          {data.allEpisodesJson.nodes.map(episode => 
          {
            const defaultEpisodeImage = 'episode-template2.png'
            const episodeImage = ( episode.image || defaultEpisodeImage )
              return (
                <article class = "post post-card">
                  <div class = "post-card-inside">
                    <a 
                    href = {safePrefix(`episodes/${episode.slug}`)}
                    class = "post-card-thumbnail"
                  >
                      <img 
                        src = {safePrefix(`/images/episodes/${episodeImage}`)}
                        alt = {episode.title}
                        class = "thumbnail"
                      />
                    </a>
                    <div class = "post-card-content">
                      <header class = "post-header">
                        <h3 class = "post-title">
                          <a 
                            href = {safePrefix(`episodes/${episode.slug}`)}
                            rel = "bookmark"
                          >
                            {episode.title}
                          </a>
                        </h3>
                      </header>
                      <div class = "post-excerpt">
                        <EpisodeSubtitle
                          eventDate={episode.date}
                          timeZone={episode.region}
                        />
                      </div>
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