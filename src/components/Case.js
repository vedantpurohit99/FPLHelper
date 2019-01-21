import React from "react";

import Setter from "./Setter"


class Case extends React.Component {
  state = {
    playerSet: false,
    playerActive: undefined,
    fName: undefined,
    lName: undefined,
    position: this.props.position,
    expectedScore: 0.00,
    error: undefined
  }

  determineScore = (player) => {
    const apps = player.minutes / 90;
    const goals = player.goals_scored;
    const assists = player.assists;
    const yellow = player.yellow_cards;
    const red = player.red_cards;
    var score = 0.00;

    // Goals
    if(player.element_type === 4){
      score += (1 - (Math.pow(2.78, (-(goals / apps))))) * 4;
    }

    // Assists
    score += (1 - (Math.pow(2.78, (-(assists / apps))))) * 3;
    // Yellow cards
    score += (1 - (Math.pow(2.78, (-(yellow / apps))))) * -1;
    // Red cards
    score += (1 - (Math.pow(2.78, (-(red / apps))))) * -3;
    // Apps
    score += 1;
    return Math.round(score);
  }


  setPlayer = async (e) => {
    e.preventDefault();

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://fantasy.premierleague.com/drf/bootstrap-static";
    const fName = e.target.elements.firstName.value;
    const lName = e.target.elements.lastName.value;
    const api_call = await fetch(proxyurl + url).catch(() => console.log("Blocked by browser"));
    const data = await api_call.json();
    const players = data.elements;
    var player;

    for(let x = 0; x < players.length; x++){
      if((players[x].web_name === lName) &&  (players[x].first_name === fName)){
        player = players[x];
        break;
      }
    }

    console.log(player);
    if(player && (player.element_type === this.props.position)){
      var score = this.determineScore(player);
      this.setState({
        playerSet: true,
        playerActive: undefined,
        fName: player.first_name,
        lName: player.web_name,
        position: this.props.position,
        expectedScore: score,
        error: undefined
      });
    }
    else{
      this.setState({
        playerSet: false,
        playerActive: undefined,
        fName: undefined,
        lName: undefined,
        position: this.props.position,
        expectedScore: 0.00,
        error: "Please enter a valid player for this position"
      });
    }
  }

  reset = async (e) => {
    e.preventDefault();

    this.setState({
      playerSet: false,
      playerActive: undefined,
      fName: undefined,
      lName: undefined,
      position: 0.00,
      expectedScore: 0.00,
      error: undefined
    });
    if(this.state.playerActive){
      this.props.remove(this.state.expectedScore);
    }
  }

  setActive = async (e) => {

    if((this.state.playerActive === undefined) || (this.state.playerActive === false)){
      this.setState({
        playerSet: this.state.playerSet,
        playerActive: true,
        fName: this.state.fName,
        lName: this.state.lName,
        position: this.props.position,
        expectedScore: this.state.expectedScore,
        error: this.state.error
      });
      this.props.add(this.state.expectedScore);
    }
    else {
      this.setState({
        playerSet: this.state.playerSet,
        playerActive: false,
        fName: this.state.fName,
        lName: this.state.lName,
        position: this.props.position,
        expectedScore: this.state.expectedScore,
        error: this.state.error
      });
      this.props.remove(this.state.expectedScore);
    }
  }

  render(){
    return (
      <div>
        <Setter setActive={this.setActive} error={this.state.error} reset={this.reset} setPlayer={this.setPlayer} set={this.state.playerSet} fName={this.state.fName} lName={this.state.lName} />
      </div>
    );
  }
}

export default Case;
