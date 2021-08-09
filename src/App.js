import {Route, Switch} from 'react-router-dom';
import Homepage from './components/homepage/homepage.component';
import Details from './components/details/details.component';
import './App.css';


const App = (props) => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/monster/:monsterId' component={Details} />
      </Switch>
    </div>
  )
}

export default App;