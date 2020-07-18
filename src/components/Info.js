import React, {Component} from 'react';
import x_image from '../images/1.png'; 
import o_image from '../images/0.png'; 

class Info extends Component {

  state ={
    player_X:"",
    player_O:""
  }

  handle_player_X_change = (e) => {
    this.setState({ player_X: e.target.value});
  }

  handle_player_O_change = (e) => {
    this.setState({ player_O: e.target.value});
  }

  handle_submit = (e) => {
    e.preventDefault();
    this.props.handle_players_name(this.state.player_X,this.state.player_O)
  }

  render(){
    return(
      <form className=" col-12 col-md-6" onSubmit={this.handle_submit}>
        <div class="row">
          <div className=" col-12 col-md-6" >
            <label className=" col-12 " >Name: <img className="form_name_image" src={x_image} alt="x_image"/></label>
            <input className=" col-12"
            type="text"
            value={this.state.player_X}
            onChange={this.handle_player_X_change}
            placeholder="Enter Player_X name"
            />
          </div>

          <div className=" col-12 col-md-6" >
          <label className=" col-12 ">Name: <img className="form_name_image" src={o_image} alt="x_image"/></label>

          <input className=" col-12 "
          type="text"
          value={this.state.player_O}
          onChange={this.handle_player_O_change}
          placeholder="Enter Player_O name"
          />

          </div>

        </div>




        <div className=" col-12">
          <button
          className="btn btn-primary"
          type="submit"
          value="Start game"
          >Start Game</button>
        </div>


      </form>

    );

  }


}


export default Info;
