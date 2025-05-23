
function FormInput({label, errorMessage, handleChange, ...input }) {

    return(
        <div>
            <label>{label}</label>
            <input {...input} onChange={handleChange}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;