import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';
import { Livro } from '../classes/modelo/Livro';
import styles from '../styles/Home.module.css'; // a) Importar os estilos

// b) Definir a constante baseURL
const baseURL: string = "http://localhost:3000/api/livros";

// c) Função assíncrona obter
const obterLivros = async (): Promise<Livro[]> => {
    const response = await fetch(baseURL);
    return response.json();
};

// d) Função assíncrona excluirLivro
const excluirLivro = async (codigo: number): Promise<boolean> => {
    const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
    });
    return response.ok;
};

const LivroLista: React.FC = () => {
    // e) Definir as propriedades de estado livros e carregado
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState(false);

    // f) Hook useEffect para carregar os livros
    useEffect(() => {
        if (!carregado) {
            obterLivros().then((dados) => {
                setLivros(dados);
                setCarregado(true);
            });
        }
    }, [carregado]);

    // g) Método excluir
    const excluir = (codigo: number): void => {
        excluirLivro(codigo).then((sucesso) => {
            if (sucesso) {
                setCarregado(false);
            }
        });
    };

    // h) Retorno do componente
    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next - Lista de Livros</title>
            </Head>
            <Menu />
            <main className={styles.main}>
                <h1 className={styles.title}>Lista de Livros</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Resumo</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* i) Gerar linhas da tabela usando o método map */}
                        {livros.map((livro) => (
                            <LinhaLivro
                                key={livro.codigo}
                                livro={livro}
                                excluir={() => excluir(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default LivroLista;
