import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [erro, setErro] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomeUsuario,
          senha,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErro(data.message || 'Erro ao fazer login');
      } else {
        // Aqui você pode salvar o token e redirecionar
        // Exemplo: localStorage.setItem('token', data.token);
        // navigate('/alguma-rota-protegida');
      }
    } catch {
      setErro('Erro de conexão com o servidor');
    }
  }

  return (
    <div className="login-wrapper">
      <button
        className="back-button"
        onClick={() => navigate('/')}
        aria-label="Voltar"
      >
        &#8592;
      </button>
      <div className="login-image-box">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Frutas"
          className="login-image"
        />
      </div>

      <div className='container-form'>
        <form className='form-login' onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className='form-inputs-container'>
            <input
              type="text"
              placeholder="Nome de usuário"
              required
              value={nomeUsuario}
              onChange={e => setNomeUsuario(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={e => setSenha(e.target.value)}
            />
            <button type="submit" className='buttons'>Continuar</button>
            <button type="button" className='buttons button-secundario'>Criar Conta</button>
          </div>
          {erro && <div className="erro-login">{erro}</div>}
        </form>
      </div>
    </div>
  );
}