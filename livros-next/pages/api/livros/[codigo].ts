import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivros } from '.'; // g) Importa o controlador de livros instanciado em index.ts

// h) Definição da assinatura para tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            // i) Capturar o código fornecido na URL e convertê-lo para number
            const { codigo } = req.query;
            const codigoLivro = Number(codigo);

            if (isNaN(codigoLivro)) {
                return res.status(400).json({ message: 'O código do livro deve ser numérico.' });
            }

            // i) Excluir o livro via método excluir
            controleLivros.excluir(codigoLivro);

            return res.status(200).json({ message: 'Livro excluído com sucesso!' });
        } else {
            // j) Tratar métodos não permitidos
            res.setHeader('Allow', ['DELETE']);
            return res.status(405).json({ message: `Método ${req.method} não permitido.` });
        }
    } catch (error) {
        // j) Tratar exceções do servidor
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
