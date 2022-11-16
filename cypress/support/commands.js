Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Alexandre')
    cy.get('#lastName').type('Graziano Rebouças')
    cy.get('#email').type('reboucas_idt@yahoo.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})