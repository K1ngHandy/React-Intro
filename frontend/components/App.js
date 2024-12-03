import React from 'react'

const emoji = "😄"
const titleObj = {
  title: "Emoji!"
}

export default function App() {
  return (
    <div className='App'>
      <h2>{titleObj.title}</h2>
      <p>
        {emoji}
      </p>
    </div>
  )
}
