function TextInput({ newItem, setNewItem, addItem }) {

    function keyDown(event) {
        if (event.key === "Enter") {
            console.log("Enter key pressed")
            addItem()
        }
    }

    function handleChange(event) {
        setNewItem(event.target.value);
    }

    return (
        <input 
            className="text-input" 
            type="text" 
            value={newItem} 
            onChange={handleChange} 
            onKeyDown={keyDown} 
            placeholder="new note..." 
        />
    );
}

export default TextInput;