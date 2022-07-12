Cypress.Commands.add('ComandoCustomizadoSucessoFormulario', function(){
    cy.get('#firstName').type('Saimon')
    cy.get('#lastName').type('Tolazzi')
    cy.get('#email').type('saimontolaz@hotmail.com')
    cy.get('#open-text-area').type('Teste de dudi')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
})