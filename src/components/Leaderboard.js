import React from "react"
import _ from "lodash";
// import ScoreRow from "../components/ScoreRow";
import PlayerData from "../../data/players/players.json"
import ScoreData from "../../data/scores.json"

export class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: PlayerData.players,
            scores: ScoreData.scores,
            data: null,
            isLoaded: false
        }
    }

    sumScores() {
        let sorted = []
        this.state.players.forEach( player => {
            let sum = 0
            let scoreArray = ScoreData.scores.filter(record => record.player === player.id)
            scoreArray.forEach( (elem) =>
                sum = sum + elem.score
            );
            sorted.push({"player": player, "scores": sum})
        })
        sorted = _.orderBy(sorted, 'scores', 'desc');
        return sorted
    }

    sortPlayers() {
        let sortedScores = this.sumScores();
        // console.log(sortedScores)
        this.setState({
            ...this.state,
            isLoaded: true,
            data: sortedScores
        })
    }

    componentDidMount() {
        this.sortPlayers()
    }

    handleSort(id) {
        console.log(`the id is ${id}`)
        console.log(this)
        this.setState(prev => {
            return {
                [id]: !prev[id],
                players: prev.players.sort((a, b) => prev[id] ? a[id] < b[id] : a[id] > b[id] )
            }
        });
    }


    render() {
        const {isLoaded, data} = this.state
        return (
            <div>{ isLoaded &&
        <div style={{maxWidth: `960px`, margin: `1.45rem`}}>
            <h1>Scoreboard</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Score</th>
                </tr>
                </thead>
                <tbody>
                {data.map((player1, key) =>
                        <tr key={key}>
                            <td>{player1.player.name}</td>
                            <td>{player1.scores}</td>
                        </tr>
                )}
                </tbody>
            </table>
        </div>
            }</div>
        )
    }
}
