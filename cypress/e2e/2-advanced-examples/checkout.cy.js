describe('Finalizar a compra no checkout', ()=> {
    beforeEach(()=> {
        cy.visit('/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.get('.inventory_item').first().within(() =>{
            cy.get('button').click();
        })
    })
    it('Finalizar a compra com sucesso', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('#first-name').type('Juliana');
        cy.get('#last-name').type('De Lima');
        cy.get('#postal-code').type('93900000');
        cy.get('#continue').click();
        cy.get('.summary_info').should('be.visible');
        cy.get('.summary_info_label').should('contain', 'Payment Information:');
        cy.get('#finish').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');


    })
})