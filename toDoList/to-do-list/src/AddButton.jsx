function AddButton({ items, setItems, newItem, setNewItem }) {

    function addItem() {
        if (newItem.trim() !== "") {
            setItems([...items, { text: newItem }])
            setNewItem("")
        }
    }

    return(
        <button className="add-button" onClick={addItem}>+</button>
    )
}

export default AddButton;