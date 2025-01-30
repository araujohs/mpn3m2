import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '@/classes/controle/ControleLivros';

// a) Definição de uma instância exportável de ControleLivro
export const controleLivros = new ControleLivros();

// b) Definição da assinatura para tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            // c) Responder ao método GET com o vetor de livros
            const livros = controleLivros.obterLivros();
            return res.status(200).json(livros);
        } else if (req.method === 'POST') {
            // d) Responder ao método POST com inclusão do livro
            const novoLivro = req.body;

            if (!novoLivro || typeof novoLivro !== 'object') {
                return res.status(400).json({ message: 'Dados do livro inválidos.' });
            }

            controleLivros.incluir(novoLivro);
            return res.status(200).json({ message: 'Livro incluído com sucesso!' });
        } else {
            // e) Tratar métodos não permitidos
            res.setHeader('Allow', ['GET', 'POST']);
            return res.status(405).json({ message: `Método ${req.method} não permitido.` });
        }
    } catch (error) {
        // e) Tratar exceções do servidor
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
