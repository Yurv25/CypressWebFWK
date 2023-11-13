import { ENDPOINT } from "../configs/constants";
class BasePage{
    
    get loginbtn () {return  cy.get('a.login')};
    
    open(){
        cy.visit(ENDPOINT)
    }

    navigateToLogin(){
        this.loginbtn.click()
    }
}

export default BasePage;