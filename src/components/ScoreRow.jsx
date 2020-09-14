import React from "react"
import ScoreData from "../../data/scores.json"
import LikeData from "../../data/likes.json"

class ScoreRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            key: this.props.key,
            score: null,
            name: null,
            likes: null,
            drawful: null,
            quiplash: null
        }
    }

    componentDidMount() {
        this.setName();
        this.calculateScores();
        this.calculateLikes();
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

    calculateLikes() {
        let likeArray = LikeData.likes.filter( record => record.winner === this.state.player.twitter);
        let countLikes = 0;
        likeArray.forEach( (elem) =>
            countLikes = countLikes + elem.likes
        )
        this.setState({
            likes: countLikes
        })
    }

    render() {
        return (
            <tr key={this.props.key}>
                <td>{this.state.name}</td>
                <td>{this.state.score}</td>
                <td>{this.state.likes}</td>
            </tr>
        );
    }
}

export default ScoreRow;
