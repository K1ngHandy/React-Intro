import React from 'react'

const emoji = "😄"
const titleObj = {
  title: "Mood:"
}
const greeting = "Hello learners!"

export default function App() {
  return (
    <div className='App'>
      <h1>{greeting}</h1>
      <h2>{titleObj.title} {emoji}</h2>
      {/* <p>
        {emoji}
      </p> */}
    </div>
  )
}
