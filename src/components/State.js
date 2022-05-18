import React, { useState } from 'react'

const State = () => {
  const [username, setUsername] = useState('loai ')

  return (
    <section>
      <h2>State</h2>
      {username}
      <button onClick={() => setUsername('loai sheikh ')}>Change name</button>
    </section>
  )
}

export default State
