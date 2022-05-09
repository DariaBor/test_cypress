export class AddressPage {
    fllAddress(address) {
        cy.get('.CM-input__control').click().type(address)
        cy.get('.CM-addressInput__list-item:nth-child(1)').click()
        cy.get('[name="submit"]').click()
    }
}