import React, {Component}  from 'react';
import x_image from '../images/1.png'; 
import o_image from '../images/0.png'; 
import {player_x, player_o} from '../constants'

class  Cell extends Component {

render(){
  {/* create imega element and update based on game_board.cell_value*/}
  let img = <img className="cell" src={o_image} alt="o_image"/>;
  if(this.props.cell_value == "none"){
    img = <div className="cell"></div>
  }
  else if(this.props.cell_value == player_x){
    img = <img className="cell" src={x_image} alt="x_image"/>;
  }else{
    img = <img className="cell" src={o_image} alt="o_image"/>;
  }

  return(
    <div className="cell" onClick={() => this.props.handle_cell_click(this.props.id,this.props.cell_coordinate)}>
          {img}
    </div>

  );
  }

}

export default Cell;
