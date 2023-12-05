describe('Visualizar pedidos confirmados', () => {
    it('Deve visualizar os o os pedidos confirmados do cliente', () => {
        // Visite a página de endereços
        cy.visit('http://127.0.0.1:5500/Implementacao/Frontend/pags/index.html');

        cy.get('input#idemail.campoDigitavel').type('gabrieladmin@gmail.com');
        cy.get('input#idsenha.campoDigitavel').type('adminSL1');
        cy.get('input#entrar').click();

        cy.get('input#live.botaoForm').click();

        cy.iframe('#iframePedidosConfirmados', { timeout: 5000 }).find('.ped').should('be.visible').should('have.length.greaterThan', 0);
    });
});