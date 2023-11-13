import BasePage from "./BasePage"

class AdminPage extends BasePage{

    get adminNav () {return cy.get(':nth-child(1) > .oxd-main-menu-item')}
    get addBtn () {return cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')}
    get userDropdown () {return cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon')}
    get roleOption () {return cy.get("div[role='listbox']")}
    get employeeName() {return cy.get('.oxd-autocomplete-text-input > input')}
    get statusDropdown() {return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')}
    get username() {return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')}
    get password(){return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')}
    get confirmPwd() {return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')}
    get saveBtn() {return cy.get('button[type="submit"]')}
    get toastMSg() {return cy.get('.oxd-text.oxd-text--p.oxd-text--toast-message.oxd-toast-content-text')}
    

    goToAdmin(){
        this.adminNav.click()
    }

    clickAddBtn(){
        this.addBtn.click()
    }

    selectUserRole(){
        this.userDropdown.click()
        this.roleOption.contains('ESS').click()
    }

    fillEmployee(){
        this.employeeName.type('Lisa')
        this.roleOption.contains('Andrews').click()
    }

    selectStatus(){
        this.statusDropdown.click()
        this.roleOption.contains('Disabled').click()
    }

    typeUsername(){
        this.username.type('testing09')
    }

    setPassword(){
        this.password.type('Hardpass12!')
        this.confirmPwd.type('Hardpass12!')
    }

    saveUser(){
        this.saveBtn.click()
    }

    verifyUser(){
        this.toastMSg.should('have.text','Successfully Saved')
    }


}

export default AdminPage;