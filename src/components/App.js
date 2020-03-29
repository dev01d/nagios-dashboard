import React from "react"
import TopCard from "./topCard.jsx"
import BottomCard from "./bottomCard.jsx"
import "../styles/normalize.css"
import "../styles/App.css"

function App() {
  return (
    <div className="container">
      <TopCard />
      <BottomCard />
    </div>
  )
}

export default App
