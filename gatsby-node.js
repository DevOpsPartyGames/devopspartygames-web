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

    const peopleResult = await graphql(`
    {
      allPeopleJson {
        nodes {
            id
            image
            name
            twitter
        }
      }
    }
  `)

    const result2 = await graphql(`
      {
        allEpisodesJson {
          nodes {
            id
            players {
              id
              score
            }
            hosts
            region
            title
            slug
            date
            video
            image
            ogimage
            games {
              name
              result
            }
          }
        }
      }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    if (peopleResult.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
  }

    if (result2.errors) {
        reporter.panicOnBuild(`Error while running second GraphQL query.`)
        return
    }

    // Create people pages.
    const personTemplate = path.resolve(`src/templates/person.js`)
    peopleResult.data.allPeopleJson.nodes.forEach(player => {
            createPage({
                path: `/person/${player.id}`,
                component: personTemplate,
                context: {
                    person: player,
                    frontmatter: {
                        title: player.name
                    }
                },
            })
    })

    // Create episode pages.
    // const episodeTemplate = path.resolve(`src/templates/episode.js`)
    // result2.data.allEpisodesJson.nodes.forEach(node => {
    //     node.episodes.forEach(episode => {
    //         createPage({
    //             path: `/episodes/${episode.slug}`,
    //             component: episodeTemplate,
    //             context: {
    //                 episode: episode,
    //                 frontmatter: {
    //                     title: episode.title
    //                 }
    //             },
    //         })
    //     })
    // })
    const episodeTemplate = path.resolve(`src/templates/episode.js`)
    result2.data.allEpisodesJson.nodes.forEach(episode => {
      createPage({
        path: `/episodes/${episode.slug}`,
        component: episodeTemplate,
        context: {
          episode: episode,
          frontmatter: {
            title: episode.title
          }
        }
      })
    })
}