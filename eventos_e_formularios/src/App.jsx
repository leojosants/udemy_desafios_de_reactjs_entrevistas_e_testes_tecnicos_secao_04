import './App.css';
import DynamicForm from './components/DynamicForm';
import RegistrationForm from './components/RegistrationForm';
import ValidationForm from './components/ValidationForm';

function App() {
  return (
    <>
      <div>
        <h2>1 - Formulário de Registro</h2>
        <RegistrationForm />
      </div>

      <div>
        <h2>2 - Formulário dinâmico</h2>
        <DynamicForm />
      </div>

      <div>
        <h2>3 - Validação de formulário</h2>
        <ValidationForm />
      </div>
    </>
  );
}

export default App;
