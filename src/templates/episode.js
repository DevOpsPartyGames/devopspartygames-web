import React from "react";
import LayoutNM from "../components/LayoutNM";
import safePrefix from "../utils/safePrefix";
import Video from "../components/Video";
import EpisodeSubtitle from "../components/EpisodeSubtitle";
import DateBookCalendarButton from "../components/DateBook";
import PersonDisplay from "../components/PersonDisplay";
import GameLink from "../components/GameLink";
import SEO from "../components/seo";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons'; 
import moment from 'moment';

export default function Episode({ pageContext }) {
    const episode = pageContext.episode
    const defaultEpisodeImage = 'episode-template.png'
    const episodeImage = ( episode.image || defaultEpisodeImage )
    const schemaEvent = [
        {
          "@context": "https://schema.org",
          "@type": "Event",
          name: `DevOps Party Games - ${episode.title}`,
          startDate: episode.date,
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "VirtualLocation",
            "url": "https://twitch.tv/devopspartygames"
          },
          image: [ 
            `https://devopspartygames.com/images/episodes/${episode.ogimage}`,
          ],
          description: "DevOps Party Games takes the idea of online party games and tilts it on its head by adding DevOps-inspired content to existing games, and then streams it live via Twitch for a worldwide audience to watch, comment, and hopefully be entertained.",
          "organizer": {
            "@type": "Organization",
            "name": "DevOps Party Games",
            "url": "https://devopspartygames.com"
          }
        },
      ]
    // const moment = require("moment-timezone")
    // const myTest = moment(episode.date).tz("America/Chicago")
    const episodeDate = moment(episode.date).format()
    const currentDateObj = new Date(Date.now())
    const currentDate = moment(currentDateObj).format()
    

    return(
        <LayoutNM>
            <SEO
              title={episode.title}
              description={episode.title}
              image={`/images/episodes/${episode.ogimage}`}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(schemaEvent)}
                </script>
            </Helmet>
             <div className="outer">
                <div className="inner-medium">
                    <article className="post post-full">
                        <header className="post-header">
                            <h1 className="post-title">{`DevOps Party Games - ${episode.title}`}</h1>
                        </header>
                        <div className="post-thumbnail">
                            <img
                            src={safePrefix(`/images/episodes/${episodeImage}`)}
                            alt={episode.title}
                            />
                        </div>
                        <div className="post-subtitle">
                            <EpisodeSubtitle
                                eventDate={episode.date}
                                timeZone={episode.region}
                            />
                        </div>
                        <div>
                            { (episodeDate >= currentDate) &&
                                <DateBookCalendarButton 
                                    eventDate={episode.date}    
                                />
                            }
                        <FontAwesomeIcon icon={faTwitch} size="2x" />&nbsp;Join the livestream at <a href = "twitch.tv/devopspartygames">twitch.tv/devopspartygames</a>
                        </div>
                            <h3>Games</h3>
                            {episode.games &&
                            <ul>
                                {episode.games.map((game, key) => {
                                    return (
                                    <li key={key}>
                                        <GameLink
                                            gameID={game.name}
                                        />

                                        { game.result &&
                                            <>
                                            &nbsp;-&nbsp;

                                            <a 
                                                href = {game.result}
                                            >
                                                results
                                            </a>
                                            &nbsp;(order t-shirts or share on social media)
                                            </> 
                                        }
                                    </li>
                                    )

                                })}
                            </ul>
                            }
                            { episode.video && 
                            <Video
                                videoSrcURL={`https://www.youtube.com/embed/${episode.video}`}
                            />
                            }

                            { (episode.players.length > 0) &&
                            <div>
                                <h2>Players</h2>
                                <div class = "post-feed">
                                    {episode.players.map((player, key) => 
                                    <PersonDisplay
                                        personID={player.id}
                                    />
                                    )}
                                </div> 
                            </div>
                            }
                        { (episode.hosts.length > 0) &&
                            <div>
                                <h2>Hosts</h2>
                                <div class = "post-feed">
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
