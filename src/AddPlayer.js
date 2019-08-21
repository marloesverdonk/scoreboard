import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class AddPlayer extends Component {
    static propTypes = {
        addNewPlayer: PropTypes.func.isRequired
    }

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewPlayer(event.target.name.value)
}


  render() {
    return (
      <div className="add-player">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}