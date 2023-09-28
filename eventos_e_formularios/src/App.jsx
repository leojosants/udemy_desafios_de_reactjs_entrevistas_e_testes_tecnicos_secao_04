import './App.css';
import DynamicForm from './components/DynamicForm';
import FileUploader from './components/FileUploader';
import MultiPartForm from './components/MultiPartForm';
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

      <div>
        <h2>4 - Upload de arquivo</h2>
        <FileUploader />
      </div>

      <div>
        <h2>5 - Formulário múltiplas etapas</h2>
        <MultiPartForm />
      </div>
    </>
  );
}

export default App;
