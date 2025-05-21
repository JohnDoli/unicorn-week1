import React, {useState} from "react"

function MyComponent() {
    
    const [name, setName] = useState("guest")
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Bob")
    }

    const updateIsEmployed = () => {
        setIsEmployed(!isEmployed)
        
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>

            <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={updateIsEmployed}>toggle</button>
        </div>
    )
}

export default MyComponent