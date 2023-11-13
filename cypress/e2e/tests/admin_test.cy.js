/// <reference types="cypress" />
import BasePage from '../Pages/BasePage'
import AdminPage from '../Pages/AdminPage'

describe("Admin Scenarios", () => {

    const admin = new AdminPage()
    
    before(()=>{
        const base = new BasePage()
    })

    beforeEach(() =>{
        cy.clearCookies();
        cy.login()
    })

    it("Add admin", () => {
        admin.goToAdmin()
        admin.clickAddBtn()
        admin.selectUserRole()
        admin.fillEmployee()
        admin.selectStatus()
        admin.typeUsername()
        admin.setPassword()
        admin.saveUser()
        admin.verifyUser()
    })
})