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
                players {
                  id
                }
              }
          }
        }
      `}
      render={data => (
        <ul class="player-episode-list">
          {data.allEpisodesJson.nodes.map(episode => 
          {
            return (
            episode.players.map(player =>
              {
                if (player.id === personID){
                  // return (console.log(episode.slug))
                  return (

                    <li class="player-episode-list">
                      <a
                        href = {safePrefix(`/episodes/${episode.slug}`)}
                      >
                        {episode.title}
                      </a>
                    </li>
                  )
                }
              }
            )
            )
          }
          )}
          </ul>

      )}


    />
  )

}