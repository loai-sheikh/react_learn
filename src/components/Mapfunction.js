import React from 'react'

const Mapfunction = () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f']
  const list = arr.map((myarr) => {
    return (
      <div>
        <h4>{myarr}</h4>
      </div>
    )
  })
  return (
    <section>
      <h2>Map Function</h2>
      <ul>{list}</ul>
    </section>
  )
}

export default Mapfunction
