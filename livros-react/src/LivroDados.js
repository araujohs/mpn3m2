import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditoras';

// a) Instanciar os controladores
const controleLivros = new ControleLivros();
const controleEditoras = new ControleEditoras();

const LivroDados = () => {
    // b) Definir o vetor opcoes
    const opcoes = controleEditoras.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    // c) Propriedades de estado
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    // d) Atributo navigate
    const navigate = useNavigate();

    // e) Método tratarCombo
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    // f) Método incluir
    const incluir = (event) => {
        event.preventDefault();

        const novoLivro = {
            codigo: 0,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
        };

        controleLivros.incluir(novoLivro);
        navigate('/');
    };

    // g) Retorno do componente
    return (
        <main className="container">
            <h1>Incluir Novo Livro</h1>
            <form onSubmit={incluir}>
                {/* Campo Título */}
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        id="titulo"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                {/* Campo Resumo */}
                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo</label>
                    <textarea
                        id="resumo"
                        className="form-control"
                        rows="3"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </div>

                {/* Campo Autores */}
                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores</label>
                    <textarea
                        id="autores"
                        className="form-control"
                        rows="3"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                    />
                    <div className="form-text">Insira um autor por linha.</div>
                </div>

                {/* Combo de Seleção para Editoras */}
                <div className="mb-3">
                    <label htmlFor="editora" className="form-label">Editora</label>
                    <select
                        id="editora"
                        className="form-select"
                        value={codEditora}
                        onChange={tratarCombo}
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Botão de Submissão */}
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </main>
    );
};

export default LivroDados;
