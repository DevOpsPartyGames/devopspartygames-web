import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default function ShowSeasonOneLeaderboardRank ({personID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
      query SeasonOneRankQuery {
        allPeopleJson(
          sort: {fields: fields___Season_One, order: DESC}
          filter: {fields: {Season_One: {gt: 0}}}
        ) {
          nodes {
            fields {
              Season_One
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
                      <b>Season One Ranking:</b> {i +1} / {data.allPeopleJson.nodes.length}
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