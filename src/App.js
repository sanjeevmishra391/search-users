import React, {Component} from 'react';
import CardList from './components/cardlist/CardList';
import Searchbox from './components/searchbox/Searchbox';
import './App.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ''
    }
    // console.log('Inside constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState({users: users}));
    // console.log('Inside component did mount');
  }

  handleChange = (e) => {
    this.setState({searchText: e.target.value}, () => console.log(this.state.searchText));
  }

  render() {
    // console.log('Inside render');
    const {users, searchText} = this.state;

    const filterUsers = users.filter((user) => { return user.name.toLowerCase().includes(searchText.toLowerCase()) })

    return (
        <div className='app'>
          <Searchbox handleChange={this.handleChange} placeholder={'Search users'} />
          <CardList users={filterUsers} />
        </div>
    )
  }
}

export default App;
