import usuariosController from "../controllers/usuarios.controller";
import usuariosServices from '../services/usuarios.services.js';

jest.mock('../services/usuarios.services.js');

describe("Usuarios Controller", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Deveria logar usuário com sucesso", async () => {
        const req = {
            body: {
                email: "usuario@teste.com",
                senha: "senha123",
            },
        };

        const res = {
            send: jest.fn(),
        };

        const usuarioMock = {
            idUsuario: 1,
            isCliente: true,
        };

        const resultado = {
            success: true,
            usuario: usuarioMock,
            mensagem: "Usuario logado com sucesso",
        };

        usuariosServices.logaUsuario.mockResolvedValue(resultado);

        await usuariosController.logaUsuario(req, res);

        expect(usuariosServices.logaUsuario).toHaveBeenCalledTimes(1);
        expect(usuariosServices.logaUsuario).toHaveBeenCalledWith(
            req.body.email,
            req.body.senha
        );

        expect(res.send).toHaveBeenCalledWith(resultado);
    });
});