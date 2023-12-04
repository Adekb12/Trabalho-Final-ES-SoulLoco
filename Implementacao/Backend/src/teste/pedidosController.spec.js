import pedidosController from "../controllers/pedidos.controller";
import pedidosServices from '../services/pedidos.services.js';

jest.mock('../services/pedidos.services.js');

describe("Pedidos Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Deveria criar um pedido com sucesso", async () => {
        const req = {
            params: {
                idCliente: "1",
            },
            body: {
                dataPedido: "2023-12-01",
            },
        };

        const res = {
            send: jest.fn(),
        };

        const idPedidoSimulado = 20
        pedidosServices.criarPedido.mockResolvedValue(idPedidoSimulado);

        await pedidosController.criarPedido(req, res);

        expect(pedidosServices.criarPedido).toHaveBeenCalledTimes(1);
        expect(pedidosServices.criarPedido).toHaveBeenCalledWith(
            req.params.idCliente,
            req.body.dataPedido,
            "Andamento"
        );

        expect(res.send).toHaveBeenCalledWith(idPedidoSimulado);
    });
});
