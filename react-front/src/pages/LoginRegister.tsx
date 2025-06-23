import './LoginRegister.css';
import { useNavigate } from 'react-router-dom';

export default function LoginRegister() {

    const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <div className="login-image-box">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Frutas"
          className="login-image"
        />
      </div>

      <div className='container-buttons' >
        <button className='buttons button-principal' onClick={() => navigate('/Login')}>Entrar</button>
        <button className='buttons button-secundario'>Criar Conta</button>
      </div>
      {/* Adicione aqui o restante da tela */}
    </div>
  );
}