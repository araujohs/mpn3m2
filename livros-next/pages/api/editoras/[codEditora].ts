import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditoras } from '.';

// g) Definir a assinatura para tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            // h) Recuperar codEditora da URL e convertê-lo para number
            const { codEditora } = req.query;
            const codigo = Number(codEditora);

            if (isNaN(codigo)) {
                return res.status(400).json({ message: 'O código da editora deve ser numérico.' });
            }

            // h) Obter o nome da editora com getNomeEditora
            const nomeEditora = controleEditoras.getNomeEditora(codigo);

            if (nomeEditora) {
                return res.status(200).json({ nome: nomeEditora });
            } else {
                return res.status(404).json({ message: 'Editora não encontrada.' });
            }
        } else {
            // i) Tratar métodos não permitidos
            res.setHeader('Allow', ['GET']);
            return res.status(405).json({ message: `Método ${req.method} não permitido.` });
        }
    } catch (error) {
        // i) Tratar exceções do servidor
        console.error('Erro no servidor:', error);
        return res.status(500).json({ message: 'Erro interno do servidor.' });
    }
};
