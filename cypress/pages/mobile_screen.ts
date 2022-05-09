export class MobilePage {
   
   fillMobile(number) {
    cy.get('.CM-input__control').click()
    cy.get('.CM-input__control').type(number)
    cy.get('[name="submit"]').click()
   }
   
}