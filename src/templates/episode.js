import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import Video from "../components/Video";
import CalendarButton from "../components/CalendarButton";
import EpisodeSubtitle from "../components/EpisodeSubtitle";

export default function Episode({ pageContext }) {
    const episode = pageContext.episode
    const defaultEpisodeImage = 'episode-template.png'
    const episodeImage = ( episode.image || defaultEpisodeImage )
    const moment = require("moment-timezone")
    const myTest = moment(episode.date).tz("America/Chicago")

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
                        { episode.calendar && 
                            <CalendarButton
                                calendarURL={episode.calendar}
                            />
                        }
                            <h3>Region</h3>
                            <p>{episode.region}</p>
                            <h3>Games</h3>
                            <ul>
                                {episode.games.map((game, key) => {
                                    return (<li key={key}>{game}</li>)
                                })}
                            </ul>
                            { episode.video && 
                            <Video
                                videoSrcURL={`https://www.youtube.com/embed/${episode.video}`}
                            />
                            }
                            { episode.quiplashlink &&
                                <div>
                                    <a
                                        href = {episode.quiplashlink}
                                    >
                                        quiplash results
                                    </a>
                                </div>
                            }
                            { episode.drawfullink &&
                                <div>
                                    <a
                                        href = {episode.drawfullink}
                                    >
                                        drawful results
                                    </a>
                                </div>
                            }
                    </article>
                </div>
            </div>
        </LayoutNM>
    );
}
