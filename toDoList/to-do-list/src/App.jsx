import { useState } from 'react'
import Item from './Item'
import AddButton from './AddButton'
import TextInput from './TextInput'

function App() {

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")

  function addItem() {
    if (newItem.trim() !== "") {
      setItems([...items, { text: newItem }])
      setNewItem("")
    }
  }

  return (
    <>
      <div className='app-container'>
        <ol className='item-container'>
          {items.map((item, index) => (
            <li key={index}> 
              <Item text={item.text}/>
            </li>
          ))}
        </ol>
        <div className='item-adding-container'>
          <TextInput newItem={newItem} setNewItem={setNewItem} addItem={addItem}/>
          <AddButton items={items} setItems={setItems} newItem={newItem} setNewItem={setNewItem} addItem={addItem}/>
        </div>
      </div>
    </>
  )
}

export default App
