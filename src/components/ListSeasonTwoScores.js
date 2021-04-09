import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListSeasonTwoScores () {

  return (
    <StaticQuery
      query={graphql`
        query SeasonTwoQuery {
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
      <div>
      <div style={{maxWidth: `960px`, margin: `1.45rem`}}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>

          <tbody>
            {data.allPeopleJson.nodes.map(player =>
              {
                return (
                  <tr>
                    <td>
                      <a
                        href = {safePrefix(`/person/${player.id}`)}
                      >
                        {player.name}
                      </a>
                    </td>
                    <td>
                      {player.fields.Season_Two}
                    </td>
                  </tr>
                )

              }
              )}
          </tbody>
        </table>

      </div>
      </div>

    )}





    />
  )
}