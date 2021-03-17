import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default function GameLink( {gameID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
        query GamesQuery {
          allGamesJson {
            nodes {
              id
              link
              name
            }
          }
        }
      `}
      render={data => (
        <>
          {data.allGamesJson.nodes.map(game => 
          {
            if (game.id===gameID){
              return (
                <a 
                  href={game.link}
                >
                  {game.name}
                </a>
              )
            } 
          }
          )}
          </>
      )}


    />
  )

}