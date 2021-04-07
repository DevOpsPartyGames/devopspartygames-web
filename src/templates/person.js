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

export default function Person({ pageContext }) {
    const player = pageContext.person
    const topPlayer = useTopOverallPlayer()
    const topSeasonOnePlayer = useSeasonOneTopPlayer()
    const topSeasonTwoPlayer = useSeasonTwoTopPlayer()
    // console.log(topPlayer)
    return(
        <LayoutNM>
            <div className="outer">
                <div className="inner-medium">
                    <h1>{player.name}</h1>
                    <div className="container-flexbox">
                        <div className="main-block">
                            <div>
                                <h4>Ranking</h4>
                                {player.id == topPlayer && 
                                    <p>TOP OVERALL PLAYER</p>
                                }
                                {player.id == topSeasonOnePlayer && 
                                    <p>TOP SEASON ONE PLAYER</p>
                                }
                                {player.id == topSeasonTwoPlayer && 
                                    <p>TOP SEASON TWO PLAYER</p>
                                }
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
                                <h3>Scores</h3>                            
                                <ul>
                                    { player.fields.Season_One > 0 &&
                                    <li>Season One Score: {player.fields.Season_One}</li>
                                    }
                                    { player.fields.Season_Two > 0 &&
                                    <li>Season Two Score: {player.fields.Season_Two}</li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3>Episodes</h3>
                            <ListPersonEpisodes 
                                personID={player.id}
                            />
                        </div>
                        <div>
                            <img src={safePrefix(`/images/people/${player.image}`)} alt={`${player.name}`} class = "player-page" />
                            <br />
                            <a 
                                href={`https://twitter.com/${player.twitter}`}
                                class="player-social"
                            >
                                <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
                                {player.twitter}
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </LayoutNM>
    );
 }
