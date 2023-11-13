/// <reference types="cypress" />
import BasePage from '../Pages/BasePage'
import LoginPage from '../Pages/LoginPage'

describe('Login Scenarios',() =>{

    const login = new LoginPage()

    before(()=>{
        const base = new BasePage()
    })


    beforeEach(() => {
        cy.fixture('users.json').as('users')
        login.open()
        //login.goToLogin()
    })

    it('Login Successfully',function () {
        login.setUsername(this.users.validUser.username)
        login.setPassword(this.users.validUser.password)
        login.clickSubmit()
        login.verifyLogin()

        /*cy.origin('https://accounts.zoho.eu', {args: this.users}, ({validUser,invalidUser}) => {
            const LoginPage = Cypress.require('../Pages/LoginPage')
            const login = new LoginPage()
            login.loginToPage(validUser.email, validUser.password)
            cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)').should('exist') 
        })*/

        /*cy.origin('https://www.zoho.com/',() => {
            
        })*/
        
    })

}) 