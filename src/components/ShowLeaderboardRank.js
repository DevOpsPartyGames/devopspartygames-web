import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default function ShowLeaderboardRank ({personID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
        query RankQuery {
          allPeopleJson(
            sort: {fields: fields___testRaw, order: DESC}
            filter: {fields: {testRaw: {gt: 0}}}
            ) {
            nodes {
              fields {
                testRaw
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
                //   personID = {personID}
                //   </>
                // )
                if (player.id == personID){
                  return (
                    <div>
                      <b>Overall Ranking:</b> {i +1} / {data.allPeopleJson.nodes.length}
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