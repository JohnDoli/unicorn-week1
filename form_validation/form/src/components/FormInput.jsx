
function FormInput({label, handleChange, ...input }) {

    return(
        <div>
            <label>{label}</label>
            <input {...input} onChange={handleChange}/>
        </div>
    )
}

export default FormInput;