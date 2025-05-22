
function Item({text = "no note"}) {

    return (
        <div className="text-container">
            <p>-- {text}</p>
        </div>
    )
}

export default Item