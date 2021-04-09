import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListOverallScores () {

  return (
    <StaticQuery
      query={graphql`
        query OverallScoresQuery {
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
                      {player.fields.testRaw}
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