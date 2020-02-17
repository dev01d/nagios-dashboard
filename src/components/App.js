import React from "react"
import TopCard from "./topCard.jsx"
import BottomCard from "./bottomCard.jsx"
// import "../styles/barebones/barebones.css"
import "../styles/barebones/normalize.css"
import "../styles/App.css"

function App() {
  return (
    <div classname="container">
      <TopCard />
      <BottomCard />
    </div>
  )
}

export default App
