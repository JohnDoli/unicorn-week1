function AddButton({ items, setItems, newItem, setNewItem, addItem }) {

    return(
        <button className="add-button" onClick={addItem}>+</button>
    )
}

export default AddButton;