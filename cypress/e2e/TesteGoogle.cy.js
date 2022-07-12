it('Testando Google', function(){
    cy.visit('https://google.com')

    cy.get('input[type="text"][title="Pesquisar"]').type("Teste de Cypress")
    cy.get('.FPdoLc > center > .gNO89b').as('ClasseGoogle')
    cy.get('@ClasseGoogle').click()
})