import React from 'react';
import './App.css';
import LivroLista from './LivroLista'; // Importa o componente LivroLista
import LivroDados from './LivroDados'; // Importa o componente LivroDados
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">

        {/* Menu de Navegação */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Catálogo de Livros</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dados">Novo</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </Router>
  );
}

export default App;










/*
import React from 'react';
import './App.css';
import LivroLista from './LivroLista'; // Importa o componente LivroLista

function App() {
  return (
    <div>
      <LivroLista />
    </div>
  );
}

export default App;
*/