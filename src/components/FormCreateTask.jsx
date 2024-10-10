import { useState } from "react";

const FormCreateTask = ({ create }) => {
    let [fields, setFields] = useState([
        { label: 'Title', name: 'title', type: 'text', value: '' },
        { label: 'Max', name: 'max', type: 'number', value: '' }
    ])

    function setNewValue(name, newValue) {
        setFields(fields.map(field => field.name == name ? { ...field, value: newValue } : field))
    }

    function sendForm() {
        let result = {}
        fields.map(field => result[field.name] = field.value)
        create(result)
    }

    return (<>
        <form onSubmit={(e) => { e.preventDefault() }}>
            {fields.map(field =>
                <div key={field.name} className="m-3">
                    <label htmlFor={field.label}></label>
                    <input type={field.type} name={field.name} value={field.value} onChange={(e) => { setNewValue(field.name, e.target.value) }} />
                </div>
            )}
            <button onClick={() => { sendForm() }} className="btn btn-success m-3" type="submit">Add New Task</button>
        </form>
    </>);
}

export default FormCreateTask;