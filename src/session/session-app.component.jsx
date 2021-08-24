import React from "react";
import logo from '../logo.svg';
import LifeCycles from "./life-cycles.component";
import '../App.css';

class SessionApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showChild: true,
      count: 0
    }
  }

  render() {
    return <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'/>
        <button
          onClick={() =>
            this.setState(state => ({
              showChild: !state.showChild
            }))
          }
        >
          Toggle Lifecycles
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              // count : state.count + 1
              count: state.count == 5 ? state.count : state.count + 1 // shouldComponentUpdate method will return false after 5
            }))
          }
        >
          Increment
        </button>
        {this.state.showChild ? <LifeCycles text={this.state.count}/> : null}
      </header>
    </div>
  }

}

export default SessionApp;