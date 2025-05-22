

function TextInput({newItem, setNewItem}) {

    function handleChange(event) {
        setNewItem(event.target.value);
    }

    return (
        <input className="text-input" type="text" value={newItem} onChange={handleChange} placeholder="new note..." />
    );
}

export default TextInput;