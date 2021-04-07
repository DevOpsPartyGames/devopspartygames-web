import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import ListPersonEpisodes from "../components/ListPersonEpisodes";
import ShowLeaderboardRank from "../components/ShowLeaderboardRank";
import ShowSeasonOneLeaderboardRank from "../components/ShowSeasonOneLeaderboardRank";
import ShowSeasonTwoLeaderboardRank from "../components/ShowSeasonTwoLeaderboardRank";
import {useTopOverallPlayer} from "../hooks/use-top-overall-player";
import {useSeasonOneTopPlayer} from "../hooks/use-season-one-top-player";
import {useSeasonTwoTopPlayer} from "../hooks/use-season-two-top-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'; 
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/seo";


export default function Person({ pageContext }) {
    const player = pageContext.person
    const topPlayer = useTopOverallPlayer()
    const topSeasonOnePlayer = useSeasonOneTopPlayer()
    const topSeasonTwoPlayer = useSeasonTwoTopPlayer()
    // console.log(topPlayer)
    return(
        <LayoutNM>
           <SEO
              title={player.name}
              description={player.name}
            />
            <div className="outer">
                <div className="inner-medium">
                    <h1>{player.name}</h1>
                    <div className="container-flexbox">
                        <div className="main-block">
                            <div>
                                <h4>Ranking</h4>
                                <ShowLeaderboardRank 
                                    personID={player.id}
                                />
                                <ShowSeasonOneLeaderboardRank 
                                    personID={player.id}
                                />
                                <ShowSeasonTwoLeaderboardRank 
                                    personID={player.id}
                                />
                            </div>

                            <div>
                                <h4>Scores</h4>                            
                                <ul>
                                    { player.fields.Season_One > 0 &&
                                    <li>Season One Score: {player.fields.Season_One}</li>
                                    }
                                    { player.fields.Season_Two > 0 &&
                                    <li>Season Two Score: {player.fields.Season_Two}</li>
                                    }
                                </ul>
                            </div>
                            <div>
                            <h4>Episodes</h4>
                            <ListPersonEpisodes 
                                personID={player.id}
                            />
                        </div>
                        </div>

                        <div>
                            <img src={safePrefix(`/images/people/${player.image}`)} alt={`${player.name}`} class = "player-page" />
                            <br />
                            <div class="tooltip">
                                <a 
                                    href={`https://twitter.com/${player.twitter}`}
                                    class="player-social"
                                >
                                    <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                                </a>
                                <span class="tooltiptext">@{player.twitter} on Twitter</span>
                            </div>
                            {player.id == topPlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Overall Player</span>
                                </div>
                            }
                            {player.id == topSeasonOnePlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Season One Player</span>
                                </div>
                            }
                            {player.id == topSeasonTwoPlayer &&
                                <div class="tooltip">
                                    <FontAwesomeIcon icon={faMedal} size="2x"/>
                                    <span class="tooltiptext">Top Season Two Player</span>
                                </div>
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        </LayoutNM>
    );
 }
