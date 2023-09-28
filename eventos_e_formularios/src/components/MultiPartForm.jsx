import { useState } from "react";

const MultiPartForm = () => {
    const [step, setStep] = useState(1);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const previousStep = () => {
        setStep(step - 1);

    };

    const nextStep = () => {
        if (step === 1 && formValues.name === '') {
            alert('Por favor, preencha o campo "NOME"!');
        }
        else if (step === 2 && formValues.email === '') {
            alert('Por favor, preencha o campo "E-MAIL"!');
        }
        else {
            setStep(step + 1);
        }
    };

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValues.password === '') {
            alert('Por favor, preencha o campo "SENHA"!');
        }
        else {
            console.log(formValues);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                step === 1 &&
                (
                    <div>
                        <label>
                            <p>Nome</p>
                            <input type="text" name="name" onChange={handleChange} />
                        </label>
                    </div>
                )
            }

            {
                step === 2 &&
                (
                    <div>
                        <label>
                            <p>E-mail</p>
                            <input type="email" name="email" onChange={handleChange} />
                        </label>
                    </div>
                )
            }

            {
                step === 3 &&
                (
                    <div>
                        <label>
                            <p>Senha</p>
                            <input type="password" name="password" onChange={handleChange} />
                        </label>
                    </div>
                )
            }

            {
                step > 1 && <button type="button" onClick={previousStep}>Anterior</button>
            }

            {
                step < 3 && <button type="button" onClick={nextStep}>Próximo</button>
            }

            {
                step === 3 && <button type="submit">Enviar</button>
            }
        </form>
    );
};

export default MultiPartForm;