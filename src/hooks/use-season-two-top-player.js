import {useStaticQuery, graphql} from "gatsby";

export const useSeasonTwoTopPlayer = () => {
    const player  = useStaticQuery(
        graphql`
        query topSeasonTwoQuery {
            allPeopleJson(sort: {fields: fields___Season_Two, order: DESC}, limit: 1) {
              nodes {
                fields {
                  Season_Two
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
