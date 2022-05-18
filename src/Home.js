import React from 'react'
import Blog from './components/Blog'
import Events from './components/Events'
import State from './components/State'
import Components from './components/Components'
import Mapfunction from './components/Mapfunction'
const myname = 'loai'
const age = 32
const friends = ['a ', 'b ', 'c ']
const Home = (props) => {
  return (
    <React.Fragment>
      <h2>
        Hello {myname} and my age is {age + 1}
      </h2>
      <li>{friends}</li>
      <h2> This is Home and my name is {props.myname}</h2>
      <Blog blog2={props.blog}></Blog>
      <Events></Events>
      <State></State>
      <Components gender='Male'></Components>
      <Mapfunction></Mapfunction>
    </React.Fragment>
  )
}

export default Home
