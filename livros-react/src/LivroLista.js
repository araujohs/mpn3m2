import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditoras';

// a) Instanciar os controladores
const controleLivro = new ControleLivros();
const controleEditoras = new ControleEditoras();

// b) Componente auxiliar LinhaLivro
const LinhaLivro = ({ livro, excluir }) => {
    // c) Definir o atributo nomeEditora, invocando getNomeEditora
    const nomeEditora = controleEditoras.getNomeEditora(livro.codEditora);

    // d) Retorno com linha de tabela
    return (
        <tr>
            <td>{livro.titulo}<br />
                {/* e) Botão de exclusão */}
                <button class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                {/* f) Exibir autores como lista */}
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

// g) Componente LivroLista
const LivroLista = () => {
    // h) Propriedades livros (vetor) e carregado (booleana)
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    // i) Hook useEffect
    useEffect(() => {
        if (!carregado) {
            setLivros(controleLivro.obterLivros());
            setCarregado(true);
        }
    }, [carregado]);

    // j) Método excluir
    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    // k) Retorno do componente
    return (
        <main class="container">
            <h1>Catálogo de Livros</h1>
            <table class="table table-borderless table-striped">
                <thead class="table-dark">
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {/* l) Geração das linhas com map */}
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
