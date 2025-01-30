import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditoras from '../../../classes/controle/ControleEditoras';

// a) Instância exportável de ControleEditora
export const controleEditoras = new ControleEditoras();

// b) Definição da assinatura para tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            // c) Responder ao método GET com o vetor de editoras
            const editoras = controleEditoras.getEditoras();
            res.status(200).json(editoras);
        } else {
            // d) Tratar métodos não permitidos
            res.setHeader('Allow', ['GET']);
            res.status(405).json({ message: `Método ${req.method} não permitido.` });
        }
    } catch (error) {
        // d) Tratar exceções do servidor
        console.error('Erro no servidor:', error);
        res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
