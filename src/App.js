import React from 'react'
import './App.css'
import Footer from './Footer'
import Home from './Home'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Home myname="loai sheikh" blog="thsi is blog" />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App
