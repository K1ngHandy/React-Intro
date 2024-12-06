import React from 'react'
import { useState } from 'react';

const happyEmoji = "😄";
const sadEmoji = "😞";

export default function App() {
  const [ happy, setHappy ] = useState(true);

  return (
    <div className="App" onClick={ () => setHappy(!happy) }>
      {happy === false ? <h1>Hello {sadEmoji} learners...</h1> : <h1>Hello {happyEmoji} learners!</h1>}
    </div>
  )
}
