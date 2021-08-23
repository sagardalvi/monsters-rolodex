import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import Details from './components/details/details.component';
import AddMonster from './components/add-monster/add-monster.component';
import './App.css';
import {addUsersList} from './redux/user/user.action';
import {connect} from 'react-redux';


class App extends React.Component {

  componentDidMount() {
    const {addMonsters} = this.props;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => addMonsters(users))
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/monster/:monsterId' component={Details}/>
          <Route exact path='/add' component={AddMonster}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addMonsters: monsters => dispatch(addUsersList(monsters))
});

export default connect(null, mapDispatchToProps)(App);