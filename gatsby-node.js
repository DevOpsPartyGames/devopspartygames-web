/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
      {
        allPlayersJson {
          nodes {
            players {
              id
              bio
              episodes
              image
              name
              twitter
            }
          }
        }
      }
    `)

    const result2 = await graphql(`
      {
        allEpisodesJson {
          nodes {
            episodes {
              id
              games
              players
              region
              title
              slug
              calendar
              date(formatString: "MMMM DD")
              time: date(formatString: "HH:mmZ")
            }
          }
        }
      }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    if (result2.errors) {
        reporter.panicOnBuild(`Error while running second GraphQL query.`)
        return
    }

    // Create people pages.
    const personTemplate = path.resolve(`src/templates/person.js`)
    result.data.allPlayersJson.nodes.forEach(node => {
        node.players.forEach(player => {
            createPage({
                path: `/players/${player.id}`,
                component: personTemplate,
                context: {
                    person: player,
                    frontmatter: {
                        title: player.name
                    }
                },
            })
        })
    })

    // Create episode pages.
    const episodeTemplate = path.resolve(`src/templates/episode.js`)
    result2.data.allEpisodesJson.nodes.forEach(node => {
        node.episodes.forEach(episode => {
            createPage({
                path: `/episodes/${episode.slug}`,
                component: episodeTemplate,
                context: {
                    episode: episode,
                    frontmatter: {
                        title: episode.title
                    }
                },
            })
        })
    })
}