import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default function ShowSeasonThreeLeaderboardRank ({personID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
      query SeasonThreeRankQuery {
        allPeopleJson(
          sort: {fields: fields___Season_Three, order: DESC}
          filter: {fields: {Season_Three: {gt: 0}}}
        ) {
          nodes {
            fields {
              Season_Three
            }
            name
            id
          }
        }
      }
  `}
    render={data => (
      <>
      
      
            {data.allPeopleJson.nodes.map((player, i) =>
              {
                // return (
                //   <>
                //   Player.id = {player.id} <br />
                //   total players = {data.allPeopleJson.nodes.length}
                //   </>
                // )
                if (player.id == personID){
                  return (
                    <div>
                      <b>Season Three Ranking:</b> {i +1} / {data.allPeopleJson.nodes.length}
                    </div>
                  )

                }
                return



              }
              )}

    </>
    )}





    />
  )
}