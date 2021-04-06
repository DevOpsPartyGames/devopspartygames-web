import {useStaticQuery, graphql} from "gatsby";

export const useSeasonOneTopPlayer = () => {
    const player  = useStaticQuery(
        graphql`
        query topSeasonOneQuery {
            allPeopleJson(sort: {fields: fields___Season_One, order: DESC}, limit: 1) {
              nodes {
                fields {
                  Season_One
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
