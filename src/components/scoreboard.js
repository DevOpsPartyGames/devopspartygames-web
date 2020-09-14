import React from "react"
import { StaticQuery, graphql } from "gatsby";
import ScoreRow from "../components/ScoreRow";
import PlayerData from "../../data/players.json"
import ScoreData from "../../data/scores.json"

export class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            players: PlayerData.players,
            scores: ScoreData.scores
        }
    }


    render() {
        return (<div style={{maxWidth: `960px`, margin: `1.45rem`}}>
            <h1>Scoreboard</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Score</th>
                </tr>
                </thead>
                <tbody>
                {this.state.players.map( (item,key) => {
                    return <ScoreRow player={item} key={key}></ScoreRow>
                })}
                </tbody>
            </table>
        </div>
        )
    }
}