import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { safePrefix } from '../utils'
import {useTopOverallPlayer} from "../hooks/use-top-overall-player";
import {useSeasonOneTopPlayer} from "../hooks/use-season-one-top-player";
import {useSeasonTwoTopPlayer} from "../hooks/use-season-two-top-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

export default function ListPeople( {props}) {
  const topPlayer = useTopOverallPlayer()
  const topSeasonOnePlayer = useSeasonOneTopPlayer()
  const topSeasonTwoPlayer = useSeasonTwoTopPlayer()


  
  return (
    <StaticQuery
      query={graphql`
      query AllPeopleQuery {
        allPeopleJson(sort: {fields: name, order: ASC}) {
            nodes {
              id
              name
              twitter
              image
            }
          }
      }
      `}
      render={data => (
        <>
          {data.allPeopleJson.nodes.map(person => 
          {
              return (
                <article class = "post post-card">
                  <div class = "post-card-inside">
                    <a 
                    href = {safePrefix(`person/${person.id}`)}
                    class = "post-card-thumbnail"
                  >
                      <img 
                        src = {safePrefix(`/images/people/${person.image}`)}
                        alt = {person.name}
                        class = "thumbnail"
                      />
                    </a>
                    <div class = "post-card-content">
                      <header class = "post-header">
                        <h3 class = "post-title dpg-title">
                          <a 
                            href = {safePrefix(`person/${person.id}`)}
                            rel = "bookmark"
                          >
                            {person.name}
                          </a>
                          {person.id == topPlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Overall Player</span>
                                </div>
                            }
                            {person.id == topSeasonOnePlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Season One Player</span>
                                </div>
                            }
                            {person.id == topSeasonTwoPlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Season Two Player</span>
                                </div>
                            }
                        </h3>
                      </header>
                      {/* <div class = "post-excerpt">
                        <EpisodeSubtitle
                          eventDate={episode.date}
                          timeZone={episode.region}
                        />
                      </div> */}
                    </div>

                  </div>

                </article>
              )
          }
          )}
        </>
      )}


    />
  )

}