import './App.css';
import {Component} from "react";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monsters: [
        {id: 1, name: 'Frankenstein'},
        {id: 2, name: 'Dracula'},
        {id: 3, name: 'Zombie'},
      ],
      searchField: '',
      title: 'Monsters Rolodex'
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {monsters, searchField, title} = this.state; //Destructuring
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>{title}</h1>
        <SearchBox placeholder={'Search Monsters'}
                   handleChange={this.handleChange}/>
        <p className={'search-tag'}>Filter by Name: <i>{searchField}</i></p>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
