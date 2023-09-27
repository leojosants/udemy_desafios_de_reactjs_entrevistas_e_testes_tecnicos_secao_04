import './App.css';
import DynamicForm from './components/DynamicForm';
import RegistrationForm from './components/RegistrationForm';

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
    </>
  );
}

export default App;
