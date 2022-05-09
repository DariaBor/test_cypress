export class CodePage {
    enterCode(digit1, digit2, digit3, digit4) {
        cy.get('.CM-smsInput__item:nth-child(1) > .CM-smsInput__input').click().type(digit1)
        cy.get('.CM-smsInput__item:nth-child(2) > .CM-smsInput__input').click().type(digit1)
        cy.get('.CM-smsInput__item:nth-child(3) > .CM-smsInput__input').click().type(digit1)
        cy.get('.CM-smsInput__item:nth-child(4) > .CM-smsInput__input').click().type(digit1)
        cy.get('[name="submit"]').click()
    }
}