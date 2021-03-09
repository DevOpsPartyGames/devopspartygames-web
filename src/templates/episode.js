import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";

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
                            <a target="_blank" href={episode.calendar}><img border="0" src={safePrefix('/images/add-to-calendar.png')} class = "player-episode-page" /></a>
                            <br clear = "all"></br>
                            <h3>Region</h3>
                            <p>{episode.region}</p>
                            <h3>Games</h3>
                            <ul>
                                {episode.games.map((game, key) => {
                                    return (<li key={key}>{game}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutNM>
    );
}
