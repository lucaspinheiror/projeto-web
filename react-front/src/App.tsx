import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Login from './pages/Login';
// Importe aqui outras páginas depois

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;