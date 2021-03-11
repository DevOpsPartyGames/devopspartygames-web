import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import Video from "../components/Video";
import CalendarButton from "../components/CalendarButton";

export default function Episode({ pageContext }) {
    const episode = pageContext.episode
    return(
        <LayoutNM>
            <div className="outer">
                <div className="inner-medium">
                    <h1>{episode.title}</h1>
                    <div className="container-flexbox">
                        <div className="main-block">
                        <p>date is {episode.date} at {episode.time}</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </LayoutNM>
    );
}
