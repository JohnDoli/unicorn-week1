import { useState } from "react"

function HandlerOnChange() {
    const [name, setName] = useState("guest")

    function handleNameChange(event){
        setName(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>
        </div>
    )
}

export default HandlerOnChange