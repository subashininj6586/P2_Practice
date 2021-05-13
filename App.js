import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
      </ul>
    </div>
  )
}

export default App