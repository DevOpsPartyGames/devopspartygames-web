import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListPersonEpisodes( {personID, ...props}) {


  
  return (
    <StaticQuery
      query={graphql`
        query EpisodeQuery {
          allEpisodesJson {
            nodes {
                id
                slug
                title
                players
              }
          }
        }
      `}
      render={data => (
        <ul>
          {data.allEpisodesJson.nodes.map(episode => 
          {
            if (episode.players.includes(personID)){
              return (
                <li>
                  <a
                    href = {safePrefix(`/episodes/$episode.slug`)}
                  >
                    {episode.title}
                  </a>
                </li>
              )
            }
          }
          )}
          </ul>

      )}


    />
  )

}