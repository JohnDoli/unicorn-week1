import { useState } from 'react'
import Item from './Item'
import AddButton from './AddButton'
import TextInput from './TextInput'

function App() {

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")

  return (
    <>
      <ol className='item-container'>
        {items.map((item, index) => (
          <li key={index}> 
            <Item text={item.text}/>
          </li>
        ))}
      </ol>
      <div className='item-adding-container'>
        <TextInput newItem={newItem} setNewItem={setNewItem}/>
        <AddButton items={items} setItems={setItems} newItem={newItem} setNewItem={setNewItem}/>
      </div>
    </>
  )
}

export default App
