import { useState } from 'react'
import Item from './Item'
import AddButton from './AddButton'

function App() {
  return (
    <>
      <Item />
      <div className='note-adding-container'>
        <AddButton />
      </div>
    </>
  )
}

export default App
