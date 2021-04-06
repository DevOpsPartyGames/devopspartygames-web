import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import ListPersonEpisodes from "../components/ListPersonEpisodes";

export default function Person({ pageContext }) {
    const player = pageContext.person
    return(
        <LayoutNM>
            <div className="outer">
                <div className="inner-medium">
                    <h1>{player.name}</h1>
                    <div className="container-flexbox">
                        <div className="main-block">
                            <a href={`https://twitter.com/${player.twitter}`}>{player.twitter}</a>
                            {/* <h3>Bio</h3>
                            <p>{player.bio}</p> */}
                            {/* <h3>Episodes</h3>
                            <ul>
                                {player.episodes.map((episode, key) => {
                                    return (<li key={key}><a href={`/episodes/${episode}`}>{episode}</a></li>)
                                })}
                            </ul> */}
                        </div>
                        <div>
                            <ListPersonEpisodes 
                                personID={player.id}
                            />
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

                        <img src={safePrefix(`/images/people/${player.image}`)} alt={`${player.name}`} width="200" height="100" />
                    </div>
                </div>
            </div>
        </LayoutNM>
    );
 }
