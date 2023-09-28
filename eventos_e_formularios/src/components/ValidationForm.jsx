import { useState } from "react";

const ValidationForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        validate(name, value);

        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

        setErrors({
            ...errors,
            [name]: validate(name, value)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validation_errors = {};

        Object.keys(values).forEach((key) => {
            const error_message = validate(key, values[key]);
            validation_errors = { ...validation_errors, [key]: error_message };
        });

        setErrors(validation_errors);

        if (Object.values(validation_errors).some((x) => x !== '')) {
            console.log('Formulário inválido!');
        }
        else {
            console.log(values);
        }
    };

    const validate = (name, value) => {
        let error_message = '';

        switch (name) {
            case 'name':
                error_message = value ? '' : 'O campo "NOME" deve ser preenchido!'
                break;

            case 'email':
                error_message = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : 'O campo "E-MAIL" deve ser preenchido!'
                break;

            case 'password':
                error_message = value.length >= 6 ? '' : 'O campo "SENHA" deve ter pelo menos 6 caracteres!';
                break;

            default:
                break;
        }

        return error_message;
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
                {
                    errors.name && <p>{errors.name}</p>
                }
            </div>

            <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    type="name"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Digite o e-mail..."
                />
                {
                    errors.email && <p>{errors.email}</p>
                }
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
                {
                    errors.password && <p>{errors.password}</p>
                }
            </div>

            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
    );
};

export default ValidationForm;