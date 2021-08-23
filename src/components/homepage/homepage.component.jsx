import {Component} from "react";
import {CardList} from "../card-list/card-list.component";
import {SearchBox} from "../search-box/search-box.component";
import './homepage.style.css';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

class Homepage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      title: 'Monsters Rolodex'
    }
  }


  handleChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {searchField, title} = this.state; //Destructuring
    const {monsters, history} = this.props
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div >
        <h1>{title}</h1>
        <div className='controls'>
          <SearchBox placeholder={'Search Monsters'} handleChange={this.handleChange}/>
          <CustomButton onClick={()=>history.push('/add')}>Add New</CustomButton>
        </div>
        <p className={'search-tag'}>Filter by Name: <i>{searchField}</i></p>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  monsters: user.monsters
});



export default connect(mapStateToProps)(Homepage);
