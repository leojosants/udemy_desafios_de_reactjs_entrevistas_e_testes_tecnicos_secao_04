import { useState } from "react";

const DynamicForm = () => {
    const [fields, setFields] = useState(['']);

    const handleChange = (indice, event) => {
        const values = [...fields];
        values[indice] = event.target.value;
        setFields(values);
    };

    const handleAdd = () => {
        const values = [...fields];
        values.push('');
        setFields(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fields);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    fields.map((field, indice) => (
                        <div key={indice}>
                            <input type="text" value={field} onChange={(event) => handleChange(indice, event)} />
                        </div>
                    ))
                }

                <input type="submit" value="Enviar" />
            </form>

            <button onClick={handleAdd}>Novo campo</button>
        </div>
    );
};

export default DynamicForm;