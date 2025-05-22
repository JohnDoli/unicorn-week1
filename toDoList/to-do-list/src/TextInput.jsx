function TextInput({ newItem, setNewItem }) {

    function keyDown(event) {
        if (event.key === "Enter") {
            console.log("Enter key pressed");
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