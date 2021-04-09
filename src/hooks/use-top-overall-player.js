import {useStaticQuery, graphql} from "gatsby";

export const useTopOverallPlayer = () => {
    const player  = useStaticQuery(
        graphql`
        query MyQuery {
            allPeopleJson(sort: {fields: fields___testRaw, order: DESC}, limit: 1) {
              nodes {
                fields {
                  testRaw
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
