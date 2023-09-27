import { useState } from "react";

const RegistrationForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Digite o nome..."
                />
            </div>

            <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Digite o e-mail..."
                />
            </div>

            <div>
                <label htmlFor="password">Senha: </label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Digite a senha..."
                />
            </div>

            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
    );
};

export default RegistrationForm;