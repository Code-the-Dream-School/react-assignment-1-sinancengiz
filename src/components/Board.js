import React, {Component}  from 'react';

import Cell from './Cell'; // Import a component from another file

class Board extends Component {

  render(){
    {/* create game borad by looping over game_board prop */}
    var first_row = []
    var second_row = []
    var third_row = []

    for (var i=0; i< 3; i++) {
        first_row.push(<Cell
          cell_value={this.props.game_board[0][i].cell_value}
          id={this.props.game_board[0][i].cell_id}
          cell_coordinate= {this.props.game_board[0][i].cell_coordinate}
          turn ={this.props.turn}
          handle_cell_click={this.props.handle_cell_click}
          />)

          second_row.push(<Cell
            cell_value={this.props.game_board[1][i].cell_value}
            id={this.props.game_board[1][i].cell_id}
            cell_coordinate= {this.props.game_board[1][i].cell_coordinate}
            turn ={this.props.turn}
            handle_cell_click={this.props.handle_cell_click}
            />)

            third_row.push(<Cell
              cell_value={this.props.game_board[2][i].cell_value}
              id={this.props.game_board[2][i].cell_id}
              cell_coordinate= {this.props.game_board[2][i].cell_coordinate}
              turn ={this.props.turn}
              handle_cell_click={this.props.handle_cell_click}
              />)
    }

      return(
        
        <div className="board">
          <div className="cell_row">
          {first_row}
          </div>
          <div className="cell_row">
          {second_row}
          </div>
          <div className="cell_row">
          {third_row}
          </div>

        </div>
      );
  }
}

export default Board;
