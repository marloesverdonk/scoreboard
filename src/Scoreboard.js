import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css"

export default class Scoreboard extends Component {
    state = {
        players: [
            { id: 1, name: "Peaches", score: 1 },
            { id: 2, name: "Belle", score: 5 },
            { id: 3, name: "Munchie", score: 3 },
            { id: 4, name: "Mika", score: 2 },
            { id: 5, name: "Vie", score: 7 },
        ]
    }

    render() {
        const players_copy = [...this.state.players]
        players_copy.sort((a, b) => b.score - a.score)

        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    {players_copy.map(this.renderPlayer)}
                </ul>
            </div>
        )
    }

    renderPlayer = (player) => {
        return (
            <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                incrementScore={this.incrementScoreOfPlayer}
            />
        )
    }

    incrementScoreOfPlayer = (id) => {

        const updatedPlayers = this.state.players.map(player => {
            if (player.id === id) {
                return { ...player, score: player.score + 1 }
            }
            else {
                return player
            }
        })

        this.setState({ players: updatedPlayers })

    }
}