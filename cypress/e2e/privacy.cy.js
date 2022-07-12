it('testa a politica de privacidade', function() {
    cy.visit('./src/privacy.html')

    cy.contains('Talking About Testing').should('be.visible')
    cy.get('#title').should('be.visible')

})