import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 1,
        titulo: "Use a Cabeça: Java",
        resumo: "Use a Cabeça! Java é uma experiência de aprendizado em programação orientada a objetos (OO) e Java",
        autores: ["Bert Bates", "Kathy Sierra"]
    },
    {
        codigo: 2,
        codEditora: 4,
        titulo: "Java, como Programar",
        resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        autores: ["Paul Deitel", "Harvey Deitel"]
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "Core Java for the Impatient",
        resumo: "Readers familiar with Horstmann's original, two volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and funcitons of Java SE 9 will learn how these new features impact the language and core libraries",
        autores: ["Cay Horstmann"]
    }
];

// c) Criar a classe ControleLivro, contendo os métodos obterLivros, incluir e excluir
export class ControleLivros {
    private livros: Array<Livro>;

    constructor() {
        this.livros = livros;
    }

    // d) Implementar o método obterLivros, com o retorno do vetor livros
    obterLivros(): Array<Livro> {
        return this.livros;
    }

    // e) Implementar o método incluir, que ajusta o código do livro e o adiciona ao vetor
    incluir(novoLivro: Livro): void {
        const maiorCodigo = this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0);
        novoLivro.codigo = maiorCodigo + 1;
        this.livros.push(novoLivro);
    }

    // f) Implementar o método excluir, que remove o livro com base no código
    excluir(codigo: number): void {
        const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
        if (indice !== -1) {
            this.livros.splice(indice, 1);
        }
    }
}
export default ControleLivros;