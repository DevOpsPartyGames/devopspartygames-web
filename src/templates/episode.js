import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import Video from "../components/Video";
import EpisodeSubtitle from "../components/EpisodeSubtitle";
import DateBookCalendarButton from "../components/DateBook";
import PersonDisplay from "../components/PersonDisplay";

export default function Episode({ pageContext }) {
    const episode = pageContext.episode
    const defaultEpisodeImage = 'episode-template.png'
    const episodeImage = ( episode.image || defaultEpisodeImage )
    // const moment = require("moment-timezone")
    // const myTest = moment(episode.date).tz("America/Chicago")

    return(
        <LayoutNM>
            <div className="outer">
                <div className="inner-medium">
                    <article className="post post-full">
                        <header className="post-header">
                            <h1 className="post-title">{episode.title}</h1>
                        </header>
                        <div className="post-thumbnail">
                            <img
                            src={safePrefix(`/images/episodes/${episodeImage}`)}
                            alt={episode.title}
                            />
                        </div>
                        <EpisodeSubtitle
                            eventDate={episode.date}
                            timeZone={episode.region}
                        />
                        <div>
                            <DateBookCalendarButton 
                                eventDate={episode.date}    
                            />
                        </div>
                            <h3>Region</h3>
                            <p>{episode.region}</p>
                            <h3>Games</h3>
                            <ul>
                                {episode.games.map((game, key) => {
                                    return (<li key={key}>{game}</li>)
                                })}
                            </ul>
                            <h3>my games</h3>
                            {console.log(episode.mygames)}
                            <ul>
                                {episode.mygames.map((game, key) => {
                                    return (
                                    <li key={key}>
                                        <a
                                            href={game.link}
                                        >
                                            {game.name}
                                        </a>
                                        { game.result &&
                                            <>
                                            &nbsp;-&nbsp;

                                            <a 
                                                href = {game.result}
                                            >
                                                result
                                            </a>
                                            </> 
                                        }
                                    </li>
                                    )

                                })}
                            </ul>
                            { (episode.quiplashlink || episode.drawfullink ) &&
                            <div>
                            <>Results of the games (order t-shirts or share on social media)</>
                                <ul>

                                { episode.quiplashlink &&
                                    <li>
                                        <a
                                            href = {episode.quiplashlink}
                                        >
                                            Quiplash
                                        </a>
                                    </li>
                                }
                                { episode.drawfullink &&
                                    <li>
                                        <a
                                            href = {episode.drawfullink}
                                        >
                                            Drawful
                                        </a>
                                    </li>
                                }
                            </ul>
                            </div>
                            }
                            { episode.video && 
                            <Video
                                videoSrcURL={`https://www.youtube.com/embed/${episode.video}`}
                            />
                            }

                            { episode.players &&
                            <div><h2>Players</h2>
                                <div class = "cards">
                                    {episode.players.map((player, key) => 
                                    <PersonDisplay
                                        personID={player}
                                    />
                                    )}
                                </div>
                                
                               </div>

                            }
                        { episode.hosts &&
                            <div><h2>Hosts</h2>
                            <div class = "cards">
                                    {episode.hosts.map((host, key) => 
                                    <PersonDisplay
                                        personID={host}
                                    />
                                    )}
                         </div>
                                
                               </div>

                            }
                    </article>
                </div>
            </div>
        </LayoutNM>
    );
}
