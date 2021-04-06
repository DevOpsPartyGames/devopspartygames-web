import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ShowLeaderboardRank ({personID, ...props}) {

  return (
    <StaticQuery
      query={graphql`
        query RankQuery {
          allPeopleJson(sort: {fields: fields___testRaw, order: DESC}) {
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