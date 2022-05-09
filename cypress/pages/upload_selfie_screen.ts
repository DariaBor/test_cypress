export class SelfieUpload {
    selectSelfiePhoto() {
        cy.get('.CM-fileButton__input').selectFile('cypress/fixtures/images/selfie-will.png')
        cy.get('img').should('be.visible')
        cy.get('[name="submit"]').click()
    }
}