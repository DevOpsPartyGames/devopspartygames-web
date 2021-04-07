import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'

export default function ListAllScores () {

  return (
    <StaticQuery
      query={graphql`
        query PlayerQuery {
          allPeopleJson(
            sort: {fields: fields___testRaw, order: DESC}
            filter: {fields: {testRaw: {gt: 0}}}
            ) {
            nodes {
              fields {
                testRaw
                Season_One
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
              <th>Total Score</th>
              <th>Season One Score</th>
              <th>Season Two Score</th>
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
                    <td>
                      {player.fields.Season_One}
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