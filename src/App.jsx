import React from 'react'
import './App.scss'
import Card from './assets/components/Card'
import Header from './assets/components/Header'
import destinations from './destinations'

function App() {
  const places = destinations.map(place => {
    return (
      <Card
        key={place.id}
        {...place}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <main className="main">
        {places}
      </main>
    </div>
  )
}

export default App
