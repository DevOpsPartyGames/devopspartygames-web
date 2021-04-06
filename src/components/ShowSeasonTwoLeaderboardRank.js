import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ShowSeasonTwoLeaderboardRank ({personID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
      query SeasonTwoRankQuery {
        allPeopleJson(
          sort: {fields: fields___Season_Two, order: DESC}
          filter: {fields: {Season_Two: {gt: 0}}}
        ) {
          nodes {
            fields {
              Season_Two
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
                      {i +1} / {data.allPeopleJson.nodes.length}
                    </div>
                  )

                }



              }
              )}

    </>
    )}





    />
  )
}