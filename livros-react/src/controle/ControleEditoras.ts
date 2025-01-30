import { Editora } from '../modelo/Editora';

export class ControleEditoras {
    private editoras: Array<Editora>;

    constructor() {
        // Inicializa com algumas editoras
        this.editoras = [
            { codEditora: 1, nome: "Alta Books" },
            { codEditora: 2, nome: "Bookman" },
            { codEditora: 3, nome: "Addiwon Wesley" },
            { codEditora: 4, nome: "Pearson" },
            { codEditora: 5, nome: "novatec" },
        ];
    }

    // Retorna o nome de uma editora com base no código
    getNomeEditora(codEditora: number): string {
        const resultado = this.editoras.filter((e) => e.codEditora === codEditora);
        return resultado.length > 0 ? resultado[0].nome : "Editora não encontrada";
    }

    // Retorna todas as editoras
    getEditoras(): Array<Editora> {
        return this.editoras;
    }
}

export default ControleEditoras;