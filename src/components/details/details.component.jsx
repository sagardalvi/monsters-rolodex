import React from 'react';
import './details.style.css';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {getUser} from '../../redux/user/user.action';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.monsterId = props.match.params.monsterId
  }

  componentDidMount() {
    const {getUser, match} = this.props;
    getUser(+match.params.monsterId);
  }

  render() {
    const {history, monster} = this.props;
    return (
      <div className='details-page'>
        <h1>Monster</h1>
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

        <CustomButton onClick={() => history.push('/')}>Back</CustomButton>

      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  monster: user.monster
})

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUser(userId))

})

export default connect(mapStateToProps, mapDispatchToProps)(Details)