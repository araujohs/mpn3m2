import type { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'; // a) Importar os estilos
import Menu from '../componentes/Menu';
import ControleEditoras from '../classes/controle/ControleEditoras'; // b) Criar um objeto do tipo ControleEditora
import { Livro } from '../classes/modelo/Livro';

// b) Criar um objeto do tipo ControleEditora
const controleEditoras = new ControleEditoras();

// c) Definir a constante baseURL
const baseURL: string = "http://localhost:3000/api/livros";

// d) Função assíncrona incluirLivro
const incluirLivro = async (livro: Livro): Promise<boolean> => {
    const response = await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(livro),
    });
    return response.ok;
};

const LivroDados: NextPage = () => {
    // e) Definir o vetor opcoes
    const opcoes = controleEditoras.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    // f) Definir as propriedades de estado
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);

    // g) Atributo navigate
    const router = useRouter();

    // h) Método tratarCombo
    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    };

    // i) Método incluir
    const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const novoLivro: Livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n'),
        };

        const sucesso = await incluirLivro(novoLivro);
        if (sucesso) {
            router.push('/LivroLista');
        }
    };

    return (
        <div className={styles.container}>
            {/* j) Componente Head */}
            <Head>
                <title>Loja Next - Adicionar Livro</title>
            </Head>

            {/* j) Componente Menu */}
            <Menu />

            {/* j) Área principal */}
            <main className={styles.main}>
                <h1 className={styles.title}>Adicionar Novo Livro</h1>

                {/* k) Formulário */}
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
                            rows={3}
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
                            rows={3}
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                        />
                        <div className="form-text">Insira um autor por linha.</div>
                    </div>

                    {/* l) Combo para Editoras */}
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

                    {/* m) Botão de submissão */}
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </main>
        </div>
    );
};

export default LivroDados;
