import React from 'react'
import Flight from './flight/Flight'
import './tailwind.output.css'

function App() {
  return (
    <div className="App">
      <div className="max-w-xl mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl bg-gray-400">
        <Flight />
      </div>
    </div>
  )
}

export default App
