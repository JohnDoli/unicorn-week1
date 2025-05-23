import React, { useState } from "react";
import FormInput from "./components/FormInput"
import { func } from "prop-types";


// https://www.youtube.com/watch?v=tIdNeoHniEY&ab_channel=LamaDev

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
    }
  ]

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values)

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} handleChange={handleChange} />
        ))}
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
