function AddButton({ items, setItems, newItem, setNewItem }) {

    function addItem() {
        setItems([...items, newItem])
        setNewItem("")
        console.log("Item added")
    }

    return(
        <button className="add-button" onClick={addItem}>+</button>
    )
}

export default AddButton;