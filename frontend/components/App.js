import React from 'react'
import { useState } from 'react';

const happyEmoji = "😄";
const sadEmoji = "😞";
const titleObj = {
  title: "Current Mood:"
}
const greeting = "Hello learners!"

export default function App() {
  const [ happy, setHappy ] = useState(true);

  return (
    <div className="App">
      <h1>{greeting}</h1>
      {happy === false ? <h2>{titleObj.title} {sadEmoji}</h2> : <h2>{titleObj.title} {happyEmoji}</h2>}

      {/* <p>
        {emoji}
      </p> */}
    </div>
  )
}
