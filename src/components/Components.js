import React, { Component } from 'react'
/**** Class based Component ****/
class Components extends Component {
  state = {
    name: 'Name',
    age: '32',
  }
  changeStateHandler = () => {
    this.setState({
      name: 'name changed',
      age: '23',
    })
  }
  render() {
    return (
      <section>
        <h2>Components</h2>
        <p>My Name: {this.state.name}</p>
        <p>My age: {this.state.age}</p>
        <p>(props) My Gender: {this.props.gender}</p>
        <button onClick={this.changeStateHandler}>Change my state</button>
      </section>
    )
  }
}

export default Components
