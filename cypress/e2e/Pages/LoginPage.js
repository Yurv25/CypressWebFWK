import BasePage from "./BasePage";

class LoginPage extends BasePage{

    get userField () {return  cy.get('input[placeholder="Username"]')};
    get nextbtn () {return  cy.get('#nextbtn')};
    get pwdField () {return  cy.get('input[placeholder="Password"]')};

    open(){
        return super.open()
    }
    /*()
    goToLogin(){
        return super.navigateToLogin()
    }
    */
    setUsername(user){
        this.userField.type(user)
    }

    setPassword(pwd){
        this.pwdField.type(pwd)
    }

    clickSubmit(){
        cy.get('button[type="submit"]').click()
    }

    verifyLogin(){
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    }
}

export default LoginPage;