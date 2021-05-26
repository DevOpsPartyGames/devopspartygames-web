import {useStaticQuery, graphql} from "gatsby";

export const useSeasonThreeTopPlayer = () => {
    const player  = useStaticQuery(
        graphql`
        query topSeasonThreeQuery {
            allPeopleJson(sort: {fields: fields___Season_Three, order: DESC}, limit: 1) {
              nodes {
                fields {
                  Season_Three
                }
                id
                name
              }
            }
          }
        `
    )

    return (
        player.allPeopleJson.nodes.map(person =>
            {
                return person.id
            }
            )
    )

    // return "hello"
}
