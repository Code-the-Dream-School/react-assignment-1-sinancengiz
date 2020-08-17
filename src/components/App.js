/* Inport Dependencies */
import React, {Component} from 'react';
import Header from './Header'; // Import a component from another file
import Board from './Board'; // Import a component from another file
import Info from './Info'; // Import a component from another file
import x_image from '../images/1.png'; 
import o_image from '../images/0.png'; 
import {player_x, player_o, winner_coordinate_list} from '../constants'


class Game extends Component {
/* Game Class */
/* States */
  state={
    form_hide:"hiden",
    board_hide:"hiden",
    button_hide:"block",
    winner_show:"hiden",
    the_winner:"none",
    player_X:"",
    player_O:"",
    turn:"player_X",
    game_board:[ [
      {
      cell_id:0,
      cell_value:"none",
      cell_coordinate:[0,0]
    },
    {
      cell_id:1,
      cell_value:"none",
      cell_coordinate:[0,1]
    },
    {
      cell_id:2,
      cell_value:"none",
      cell_coordinate:[0,2]
    }],
    [{
      cell_id:3,
      cell_value:"none",
      cell_coordinate:[1,0]
    },
    {
      cell_id:4,
      cell_value:"none",
      cell_coordinate:[1,1]
    },
    {
      cell_id:5,
      cell_value:"none",
      cell_coordinate:[1,2]
    }],
    [{
      cell_id:6,
      cell_value:"none",
      cell_coordinate:[2,0]
    },
    {
      cell_id:7,
      cell_value:"none",
      cell_coordinate:[2,1]
    },
    {
      cell_id:8,
      cell_value:"none",
      cell_coordinate:[2,2]
    }]
  ]

  };

  start_button = () => {
    /* Start button function to do form*/
    this.setState( 
      {
        form_hide:"block",
        button_hide:"hiden"
      }
   )
  }

  new_game_button = () => {
    /* new dame function */
    this.setState(
      {
        form_hide:"block",
        board_hide:"hiden",
        button_hide:"hiden",
        winner_show:"hiden",
        the_winner:"none",
        player_X:"",
        player_O:"",
        turn:"player_X",
        game_board:[ [
          {
          cell_id:0,
          cell_value:"none",
          cell_coordinate:[0,0]
        },
        {
          cell_id:1,
          cell_value:"none",
          cell_coordinate:[0,1]
        },
        {
          cell_id:2,
          cell_value:"none",
          cell_coordinate:[0,2]
        }],
        [{
          cell_id:3,
          cell_value:"none",
          cell_coordinate:[1,0]
        },
        {
          cell_id:4,
          cell_value:"none",
          cell_coordinate:[1,1]
        },
        {
          cell_id:5,
          cell_value:"none",
          cell_coordinate:[1,2]
        }],
        [{
          cell_id:6,
          cell_value:"none",
          cell_coordinate:[2,0]
        },
        {
          cell_id:7,
          cell_value:"none",
          cell_coordinate:[2,1]
        },
        {
          cell_id:8,
          cell_value:"none",
          cell_coordinate:[2,2]
        }]
      ]
      }
    ) 
  }

  reset_game_button = () => {
   /* restart game function */
    this.setState(
      {
        form_hide:"hiden",
        board_hide:"block",
        button_hide:"hiden",
        winner_show:"hiden",
        the_winner:"none",
        turn:"player_X",
        game_board:[ [
          {
          cell_id:0,
          cell_value:"none",
          cell_coordinate:[0,0]
        },
        {
          cell_id:1,
          cell_value:"none",
          cell_coordinate:[0,1]
        },
        {
          cell_id:2,
          cell_value:"none",
          cell_coordinate:[0,2]
        }],
        [{
          cell_id:3,
          cell_value:"none",
          cell_coordinate:[1,0]
        },
        {
          cell_id:4,
          cell_value:"none",
          cell_coordinate:[1,1]
        },
        {
          cell_id:5,
          cell_value:"none",
          cell_coordinate:[1,2]
        }],
        [{
          cell_id:6,
          cell_value:"none",
          cell_coordinate:[2,0]
        },
        {
          cell_id:7,
          cell_value:"none",
          cell_coordinate:[2,1]
        },
        {
          cell_id:8,
          cell_value:"none",
          cell_coordinate:[2,2]
        }]
      ]
      }
    ) 
  }

  handle_players_name = (player_X, player_O) => {
    /* function updates state with player names */
    this.setState( prevState => {
      if(player_X === "" || player_O === ""){
        alert("you need to enter a name for each player")
        return {
          form_hide:"block",
          board_hide:"hiden",
          button_hide:"hiden",
          winner_show:"hiden",
          the_winner:"none",
          player_X:"",
          player_O:"",
        };
      }
      return {
        player_X: prevState.player_X = player_X,
        player_O: prevState.player_O = player_O,
        form_hide:"hiden",
        board_hide:"block",
      };
    });
  }

check_winner = (game_board,current_player) => {
  /* function checks if any player won the game */
  let hasPlayerWon = false;
    this.setState( prevState => {
      for(let i=0; i<winner_coordinate_list.length; i++){
        hasPlayerWon = winner_coordinate_list[i].every((coordinates) => {
          let x_coordinate = coordinates[0];
          let y_coordinate = coordinates[1];
          if ( game_board[x_coordinate][y_coordinate].cell_value === current_player ){
            return true;
          } else {
            return false;
          }
        })
        if (hasPlayerWon) {
          break;
        }
      }
      if (hasPlayerWon) {
        const newState = {};
      
        if(current_player === player_x){
          newState.the_winner = prevState.player_X.toUpperCase()
        }else{
          newState.the_winner = prevState.player_O.toUpperCase()
        }
        
        return {
          ...newState,
          board_hide:"hiden",
          winner_show:"block"
        };
    
      }
    });
  }

  handle_cell_click = (id,cell_coordinate) => {
    /* this function updates sate when any of the cell clicked */
    this.setState( prevState => {
      if(prevState.game_board[cell_coordinate[0]][cell_coordinate[1]].cell_value == "none"){
        console.log(prevState.turn)
        console.log(prevState.game_board[cell_coordinate[0]][cell_coordinate[1]].cell_value)
        prevState.game_board[cell_coordinate[0]][cell_coordinate[1]].cell_value = prevState.turn
        this.check_winner(prevState.game_board,prevState.turn)

        if(prevState.turn == player_x){
          prevState.turn= player_o
        }else{
          prevState.turn= player_x
        }
        
      }


      
      return {
        form_hide:"hiden",
        board_hide:"block",
        
      };
    });
  }
      


  render(){
    return (
      <div className="container">
        <div>
        {/* this is header */}
          <Header></Header>
        </div>
        <div className={this.state.button_hide}>
          {/* start game button */}
          <button className="btn btn-primary" onClick={this.start_button.bind(this)}>Start</button>
        </div>
        <div id="info_form_div" className={this.state.form_hide}>
          {/* form element to enter players name */}
              <Info 
              handle_players_name = {this.handle_players_name}
              />

        </div>
        <div id="winner_page" className={this.state.winner_show}>
          {/* element shows the winner */}
          <div className="row">
            <div className="col-12">
              <p>Congragulationssss  {this.state.the_winner.toUpperCase()}!!! </p>
              <p>You won the game! </p>
              <p>You are so smart !!</p>
            <div class="row">
              <div class="col-6">
              <button className="btn btn-primary " onClick={this.new_game_button.bind(this)}>New Game</button>
              </div>
              <div class="col-6">
              <button className="btn btn-primary " onClick={this.reset_game_button.bind(this)}>Reset Game</button>
            </div>
            
          </div>    
              
          </div>

          </div>
      </div>
        <div id = "names_on_board_div" className={this.state.board_hide}>
          {/* element shows players name top of the game board */}
          <div class="row">
          <p className="col-6" > <img className="form_name_image" src={x_image} alt="x_image"/> {this.state.player_X}</p>
          <p className="col-6" > <img className="form_name_image" src={o_image} alt="o_image"/> {this.state.player_O}</p>
          </div>

        </div>
        <div className={this.state.board_hide}>
          {/* the element contains the game board */}
          <p></p>
          <Board 
          game_board = {this.state.game_board} 
          turn ={this.state.turn}
          handle_cell_click = {this.handle_cell_click}
          />
          <div class="row">
            {/* new game and reset game buttons*/}
            <div class="col-6">
            <button className="btn btn-primary " onClick={this.new_game_button.bind(this)}>New Game</button>
            </div>
            <div class="col-6">
            <button className="btn btn-primary " onClick={this.reset_game_button.bind(this)}>Reset Game</button>
            </div>
            
          </div>
        </div>
        

      </div>

     );
  }
}

export default Game;
