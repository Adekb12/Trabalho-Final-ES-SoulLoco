describe('Visualizar histórico de pedidos', () => {
    it('Deve visualizar os o histórico de pedidos do cliente', () => {
        // Visite a página de endereços
        cy.visit('http://127.0.0.1:5500/Implementacao/Frontend/pags/index.html');

        cy.get('input#idemail.campoDigitavel').type('gabrielFT@gmail.com');
        cy.get('input#idsenha.campoDigitavel').type('88888888');
        cy.get('input#entrar').click();

        cy.url().should('include', 'http://127.0.0.1:5500/Implementacao/Frontend/pags/tela-inicial.html?idCliente=1');
        cy.get('input#realizar').click();

        cy.get('input#historico.formHeader').click();

        cy.iframe('#iframePedidosRealizados', { timeout: 10000 }).find('.ped').should('be.visible').should('have.length.greaterThan', 0);
    });
});