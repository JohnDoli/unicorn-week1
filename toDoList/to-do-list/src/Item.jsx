
function Item({text = "no note"}) {

    return (
        <div className="note-container">
            <p>-- {text}</p>
        </div>
    )
}

export default Item