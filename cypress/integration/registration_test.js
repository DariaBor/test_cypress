/// <reference types="cypress"/>
import {MobilePage} from "../pages/mobile_screen"
import {CodePage} from "../pages/code_screen"
import {BasicDetails} from "../pages/basic_detais_screen"
import {AddressPage} from "../pages/address_screen"
import {IdUpload} from "../pages/upload_id_screen"
import {SelfieUpload} from "../pages/upload_selfie_screen"

const mobileScreen = new MobilePage()
const codeScreen = new CodePage()
const detailsScreen = new BasicDetails()
const addressScreen = new AddressPage()
const idScreen = new IdUpload()
const selfieScreen = new SelfieUpload()

before(() => {

    cy.visit('/')
  
  })

it('Registration test', () => {
    const number = '775677890' // can be configured in cypress.json if used in several tests
    const name = 'John' // or create random string https://www.programiz.com/javascript/examples/generate-random-strings
    const surname = 'Smith'
    const title = 'Mr.'
    const email = 'test@mail.com'
    cy.get('.CM-button__submit').click()
    mobileScreen.fillMobile(number)
    codeScreen.enterCode(0,0,0,0)
    detailsScreen.fillBasicInfo(title, name, surname, email)
    detailsScreen.fillBirthDate('02', '03', '1988') //also can be generated
    detailsScreen.agreeWithTerms()
    addressScreen.fllAddress('vinohrady') //can be constant
    idScreen.selectIdPhoto()
    selfieScreen.selectSelfiePhoto()
    
})