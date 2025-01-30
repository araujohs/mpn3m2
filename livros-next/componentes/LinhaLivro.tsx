import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import ControleEditoras from '../classes/controle/ControleEditoras';

// a) Instância de ControleEditora
const controleEditoras = new ControleEditoras();

// b) Interface LinhaLivroProps
interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

// c) Definição do componente exportável LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;

    const nomeEditora = controleEditoras.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}<br />
                {/* Excluir */}
                <button className="btn btn-danger" onClick={() => excluir()}>Excluir</button>
            </td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>
                {/* Lista autores */}
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

export default LinhaLivro;
