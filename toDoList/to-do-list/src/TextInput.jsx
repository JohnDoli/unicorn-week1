

function TextInput({newItem, setNewItem}) {

    return (
        <input className="text-input" type="text" value={newItem} onChange={event => setNewItem(event.target.value)} placeholder="new note..." />
    );
}

export default TextInput;