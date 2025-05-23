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
      placeholder: "johndoe123",
      label: "Username",
      errorMessage: "3-16 char., letters and numbers only",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "john@email.com",
      label: "Email",
      errorMessage: "not valid email",
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "tel",
      placeholder: "555-123-4567",
      label: "Phone Number",
      errorMessage: "not valid number",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Choose a strong password",
      label: "Password",
      errorMessage: "8-20 char., min. 1 letter, 1 number and 1 special char.",
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
