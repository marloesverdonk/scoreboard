import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Player.css"

export default class Player extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        score: PropTypes.number.isRequired,
        incrementScore: PropTypes.func.isRequired
    }
    handleClick = () => {
        this.props.incrementScore(this.props.id)
    }


    render() {
        return (
            <li className="player">
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score}</p>
                <button onClick={this.handleClick}>+</button>

            </li>
        )
    }
}