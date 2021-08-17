import {Component} from "react";
import {CardList} from "../card-list/card-list.component";
import {SearchBox} from "../search-box/search-box.component";
import './homepage.style.css';
import {connect} from 'react-redux';
import {addUsersList} from '../../redux/user/user.action';

class Homepage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      title: 'Monsters Rolodex'
    }
  }

  componentDidMount() {
    const {addMonsters} = this.props;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => addMonsters(users))
  }

  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {searchField, title} = this.state; //Destructuring
    const {monsters} = this.props
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div >
        <h1>{title}</h1>
        <SearchBox placeholder={'Search Monsters'}
                   handleChange={this.handleChange}/>
        <p className={'search-tag'}>Filter by Name: <i>{searchField}</i></p>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  monsters: user.monsters
});

const mapDispatchToProps = dispatch => ({
  addMonsters: monsters => dispatch(addUsersList(monsters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
