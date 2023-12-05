describe('Visualizar itens do cardápio', () => {
    it('Deve visualizar os itens que estão no cardápio', () => {
        // Visite a página de endereços
        cy.visit('http://127.0.0.1:5500/Implementacao/Frontend/pags/index.html');

        cy.get('input#idemail.campoDigitavel').type('gabrieladmin@gmail.com');
        cy.get('input#idsenha.campoDigitavel').type('adminSL1');
        cy.get('input#entrar').click();

        cy.get('input#entrar').click();
    });
});