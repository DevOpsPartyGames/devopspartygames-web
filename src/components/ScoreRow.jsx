import React from "react"
import { graphql } from "gatsby"
import ScoreData from "../../data/scores.json"
import PlayerData from "../../data/players.json"

class ScoreRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            key: this.props.key,
            score: null,
            name: null,
        }
    }

    componentDidMount() {
        this.setName();
        this.calculateScores();
    }

    setName() {
        this.setState({
            name: this.state.player.name
        })
    }

    calculateScores() {
        let scoreArray = ScoreData.scores.filter( record => record.player === this.state.player.twitter);
        let sum = 0;
        scoreArray.forEach( (elem) =>
            sum = sum + elem.score
        );
        this.setState({
            score: sum
        });
    }

    render() {
        return (
            <tr key={this.props.key}>
                <td>{this.state.name}</td>
                <td>{this.state.score}</td>
            </tr>
        );
    }
}

export default ScoreRow;

// export const playerQuery = graphql`
//     query PlayerQuery {
//         allPlayersJson {
//             edges {
//                 node {
//                     name
//                 }
//             }
//         }
//     }
// `