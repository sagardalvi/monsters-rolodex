import React from 'react';
import './add-monster.style.css';
import CustomButton from '../custom-button/custom-button.component';
import {generateNewMonster} from '../../redux/user/user.util';
import {addUser} from '../../redux/user/user.action';
import {connect} from 'react-redux';

class AddMonster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: generateNewMonster()
    }
  }

  generateNew = () => {
    this.setState({
      monster: generateNewMonster()
    })
  }


  render() {
    const {monster} = this.state;
    const {addMonster, history} = this.props;
    return (
      <div className='details-page'>
        <h1>New Monster</h1>
        <div className='details-container'>
          <div className='profile-pic'>
            <img alt='monster'
                 src={`https://robohash.org/${monster.id}?set=set2&size=290x290`}/>
            <h2 key={monster.id}>{monster.name}</h2>
          </div>
          <div className='info'>
            <div className='option'>
              <label>Name</label>
              <span>{monster.name}</span>
            </div>
            <div className='option'>
              <label>Email</label>
              <span>{monster.email}</span>
            </div>
            <div className='option'>
              <label>Phone</label>
              <span>{monster.phone}</span>
            </div>
            <div className='option'>
              <label>Company</label>
              <span>{monster.company.name}</span>
            </div>
            <div className='option'>
              <label>Address</label>
              <span>
                {monster.address.street},<br/>
                {monster.address.suite},<br/>
                {monster.address.city}({monster.address.zipcode})
              </span>
            </div>
          </div>
        </div>

        <div className='button-container'>
          <CustomButton onClick={() => this.generateNew()}>Generate</CustomButton>
          <CustomButton onClick={() => {
            addMonster(monster);
            history.push('/');
          }}>Add</CustomButton>
        </div>

      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  addMonster: monster => dispatch(addUser(monster))
});

export default connect(null, mapDispatchToProps)(AddMonster);