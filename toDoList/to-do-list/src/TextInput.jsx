

function TextInput({newItem, setNewItem}) {

    function HandleChange(event) {
        setNewItem(event.target.value)
    }

    return (
        <input className="text-input" type="text" value={newItem} onChange={HandleChange} placeholder="new note..." />
    );
}

export default TextInput;