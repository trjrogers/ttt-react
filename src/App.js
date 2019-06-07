import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.squares = Array(9).fill(null);
    this.state.xIsNext = true;
    this.state.winner = null;
    this.state.winningLine = [];
    this.lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // this.calculateWinner = this.calculateWinner.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let status;
    if (this.state.winner) {
      status = 'Winner: ' + this.state.winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }

  renderSquare(i) {
    const className = (this.state.squares[i] == null) ? "square" :
      (this.state.winner != null && this.state.winner === this.state.squares[i]) ?
        "square-winner" : "square-full";
    const enabled = (this.state.winner == null && this.state.squares[i] == null) ? true : false;
    const eventHandler = (enabled) ? "this.handleClick(" + i + ")" : "";
    const output = (
      <div className={className} id={i}
            onclick={eventHandler}>
            {(this.state.squares[i] != null) ? this.state.squares[i] : ""}
        </div>
        );
    return output;
  }

  handleClick(event) {
    // this.squares[i] = this.xIsNext ? 'X' : 'O';
    // this.calculateWinner();
    // this.xIsNext = !(this.xIsNext); 
    // this.render();
    console.log(event.target);
  }
}

export default App;
