
function FormInput({ label, name, type, placeholder, onChange, ...input }) {

    return(
        <div>
            <label>{label}</label>
            <input {...input} onChange={onChange}/>
        </div>
    )
}

export default FormInput;