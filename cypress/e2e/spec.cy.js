describe('Acesso ao sistema de teste', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  })

  it('Validar a tela de login', () => {
    cy.title().should('eq', 'Swag Labs');
  });
  it('Preencher o formulário de login corretamente', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.app_logo').should('contain', 'Swag Labs');
  });
})