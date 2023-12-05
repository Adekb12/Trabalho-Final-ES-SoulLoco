import cardapioController from "../controllers/cardapio.controller";
import cardapioServices from '../services/cardapio.services.js';


jest.mock('../services/cardapio.services.js');

describe("Cardapio Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test("Deveria adicionar item no cardápio com sucesso!", async () => {
        const req = {
            body: {
                nome: "Fajita de Frango Apimentada",
                imagem: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-fajitas-7.jpg.webp",
                descricao: "Ingredientes: peito de frango, pimentão, alface e molho de tomate temperados com pimenta habanero envoltos em uma tortilha crocante de trigo",
                preco: 27.89
            }
        };

        const res = {
            send: jest.fn()
        };

        const resultado = { success: true, mensagem: "Item adicionado com sucesso!" };
        cardapioServices.adicionarItem.mockResolvedValue(resultado);

        await cardapioController.adicionarItem(req, res);

        await expect(cardapioServices.adicionarItem).toHaveBeenCalledTimes(1);
        await expect(cardapioServices.adicionarItem).toHaveBeenCalledWith(
            req.body.nome,
            req.body.imagem,
            req.body.descricao,
            parseFloat(req.body.preco).toFixed(2)
        );

        expect(res.send).toHaveBeenCalledWith(resultado);
    });
});
