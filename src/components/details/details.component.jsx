import React from 'react';
import './details.style.css';
import {Link} from 'react-router-dom';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.monsterId = props.match.params.monsterId
    this.state = {
      monster: {
        id: this.monsterId,
        name: null,
        email: null,
        address: {
          street: null,
          suite: null,
          city: null,
          zipcode: null
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          bs: "harness real-time e-markets"
        }
      }
    }
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.monsterId}`)
      .then(response => response.json())
      .then(user => this.setState({monster: user}))
  }

  render() {
    const {monster} = this.state;
    return (
      <div>
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

        <Link to={'/'} className='back-navigation'> &lt;&lt;Back </Link>

      </div>
    )
  }
}

export default Details;