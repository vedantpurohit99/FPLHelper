import React from 'react';

import Title from "./components/Title"
import Case from "./components/Case"

class App extends React.Component {
  state = {
    totalValue: 0
  }

  addPlayer = (val) => {
    this.setState({
      totalValue: this.state.totalValue + val
    });
  }

  removePlayer = (val) => {
    this.setState({
      totalValue: this.state.totalValue - val
    });
  }

  render() {
      console.log(this.state.totalValue);
    return (
      <div className="container-padding-0">
        <div className="container-fluid title sticky-top background__title shadow pt-3">
          <Title />
          <h3 className="text-light pb-3">Expected Score: { this.state.totalValue }</h3>
        </div>

        <div className="w-90 container rounded py-3 px-5 background__lineup shadow-lg bg-success">
          <span className="row lead py-2 justify-content-center alert alert-danger border border-danger shadow-sm">Forwards</span>
          <div className="row justify-content-center">
            <div className="card case mx-auto shadow bg-danger">
              <div className="card-body">
                <Case position={4} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-danger" >
              <div className="card-body">
                <Case position={4} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-danger" >
              <div className="card-body">
                <Case position={4} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
          </div>

          <span className="row lead py-2 justify-content-center alert alert-info border border-info shadow-sm mt-3">Midfielders</span>
          <div className="row justify-content-center">
            <div className="card case mx-auto shadow bg-info" >
              <div className="card-body">
                <Case position={3} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-info" >
              <div className="card-body">
                <Case position={3} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-info" >
              <div className="card-body">
                <Case position={3} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-info" >
              <div className="card-body">
                <Case position={3} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-info" >
              <div className="card-body">
                <Case position={3} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
          </div>


          <span className="row lead py-2 justify-content-center alert alert-success border border-success shadow-sm mt-3">Defenders</span>
          <div className="row justify-content-center">
            <div className="card case mx-auto shadow defend" >
              <div className="card-body">
                <Case position={2} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow defend" >
              <div className="card-body">
                <Case position={2} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow defend" >
              <div className="card-body">
                <Case position={2} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow defend" >
              <div className="card-body">
                <Case position={2} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow defend" >
              <div className="card-body">
                <Case position={2} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
          </div>

          <span className="row lead py-2 justify-content-center alert alert-warning border border-warning shadow-sm mt-3">Goalkeepers</span>
          <div className="row justify-content-center">
            <div className="card case mx-auto shadow bg-warning" >
              <div className="card-body">
                <Case position={1} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
            <div className="card case mx-auto shadow bg-warning" >
              <div className="card-body">
                <Case position={1} add={this.addPlayer} remove={this.removePlayer} />
              </div>
            </div>
          </div>


        </div>

        <div className="container-fluid title background__title shadow mt-5"></div>

      </div>
    );
  }
}

export default App;
