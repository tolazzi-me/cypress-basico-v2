/// <reference types="Cypress" />


describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('Preenche e envia', function(){
        cy.get('#firstName').type('Saimon')
        cy.get('#lastName').type('Tolazzi')
        cy.get('#phone').type('dasd').should('have.value', '')
        cy.get('#email').type('saimontolaz@hotmail.com')
        cy.get('#open-text-area').type('Teste de dudi')
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('Mensagem de erro telefone', function(){
        cy.get('#firstName').type('Saimon')
        cy.get('#lastName').type('Tolazzi')
        cy.get('#email').type('saimontolaz@hotmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Teste de dudi')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('Validando e limpamdo campos', function(){
        cy.get('#firstName').type('Saimon').should('have.value', 'Saimon').clear('#firstName').should('have.value', '')
    })

    it('Mensagem de erro telefone', function(){
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it('Comando customizado, sucesso de formulario', function(){
        cy.ComandoCustomizadoSucessoFormulario()
    })

    it('Teste cy contains', function(){
        cy.contains('#support-type > :nth-child(3)', 'Elogio').click()
    })

    it('Teste .select', function(){
        cy.get('#product').select(2).should('have.value', 'cursos')
    })
    
    it('Teste .check', function(){
        cy.get('input[value="ajuda"]').check().should('have.value', 'ajuda')
        cy.get('input[value="elogio"]').check().should('have.value', 'elogio')
        cy.get('input[value="feedback"]').check().should('have.value', 'feedback')
    })

    it('Teste .check .uncheck', function(){
        cy.get('#firstName').type('Saimon')
        cy.get('#lastName').type('Tolazzi')
        cy.get('#email').type('Saimon@hotmail.com')
        cy.get('input[type="checkbox"][value="phone"]')
          .check()
          .uncheck()
        cy.get('#open-text-area').type('Teste de Saimon')
        cy.contains('button', 'Enviar').click()
    })

    it('Faz upload de um arquivo', function(){
        cy.get('#file-upload')
          .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'})
    })

    it('Faz upload de um arquivo', function(){
        cy.fixture('example').as('sampleFile')
        cy.get('#file-upload').selectFile('@sampleFile')
    })

    it('Entra na Politica de Privacidade', function(){
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })

    it('Remove o target e entra na Politica de Privacidade', function(){
        cy.get('#privacy a').invoke('removeAttr', 'target')
        .click()
    })

    it('Testa a pagina de Política de Privacidade', function(){
       
    })
})