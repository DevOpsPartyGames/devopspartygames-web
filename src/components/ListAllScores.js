import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListAllScores () {

  return (
    <StaticQuery
      query={graphql`
        query PlayerQuery {
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
      <div style={{maxWidth: `960px`, margin: `1.45rem`}}>
        <h1>Scoreboard</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
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

    )}





    />
  )
}