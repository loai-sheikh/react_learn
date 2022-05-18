import React from 'react'

const changehandler = () => {
  console.log('loai')
}

const alerthandler = () => {
  alert('loai')
}

const Events = (props) => {
  return (
    <section>
      <h2>Events</h2>
      <button onClick={changehandler}>Click me</button>
      <button onDoubleClick={alerthandler}>DB Click Alert</button>
      <button onDoubleClick={() => console.log('hello loai')}>Click me</button>
    </section>
  )
}

export default Events
