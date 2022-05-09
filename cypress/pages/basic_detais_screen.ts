export class BasicDetails {
    fillBasicInfo(title, name, surname, email) {
        cy.get('.CM-select').click()
        cy.get('.CM-select__list-item').contains(title).click()
        cy.get('[name="title"]').should('have.value', title)

        cy.get('[name="firstName"]').type(name);
        cy.get('[name="lastName"]').type(surname);
        cy.get('[name="email"]').type(email);
        cy.get('[name="idNumber"]').type('776655432')
        cy.get('[name="submit"]').should('be.disabled')
    }

    fillBirthDate(day, month, year) {
        cy.get('.CM-datepicker__select:nth-child(1) > select').click()
        cy.get('.CM-datepicker__select:nth-child(1) > select').type(day)
        cy.get('.CM-datepicker__select:nth-child(2) > select').click()
        cy.get('.CM-datepicker__select:nth-child(2) > select').type(month)
        cy.get('.CM-datepicker__select:nth-child(3) > select').click()
        cy.get('.CM-datepicker__select:nth-child(3) > select').type(year)
        cy.get('[name="submit"]').should('be.disabled')
    }

    agreeWithTerms() {
        cy.get('.CM-checkbox__checkmark').click()
        cy.get('[name="submit"]').should('be.enabled')
        cy.get('[name="submit"]').click()
    }
}