import React from "react";
import LayoutNM from "../components/LayoutNM";
// import safePrefix from "../utils/safePrefix";

export default function Episode({ pageContext }) {
    const episode = pageContext.episode
    return(
        <LayoutNM>
            <div className="outer">
                <div className="inner-medium">
                    <h1>{episode.title}</h1>
                    <div className="container-flexbox">
                        <div className="main-block">
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
