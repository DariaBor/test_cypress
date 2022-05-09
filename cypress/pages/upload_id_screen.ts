export class IdUpload {
    selectIdPhoto() {
        cy.get('.CM-fileButton__input').selectFile('cypress/fixtures/images/id-will.png')
    }
}