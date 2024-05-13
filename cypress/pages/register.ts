export class Register{
    goToRegister(){
        cy.get('#loginPanel').find('a').contains('Register').click();
    }
    fillFirstName(firstName:string){
        cy.get("input[id='customer.firstName']").type(firstName);
    };
    fillLastName(lastName:string){
        cy.get("input[id='customer.lastName']").type(lastName);
        
    };
    fillAddress(address:string){
        cy.get("input[id='customer.address.street']").type(address);
    };
    fillCity(city:string){
        cy.get("input[id='customer.address.city']").type(city);
    };
    fillState(state:string){
        cy.get("input[id='customer.address.state']").type(state);
    };
    fillZipCode(zipCode:string){
        cy.get("input[id='customer.address.zipCode']").type(zipCode);
    };
    fillPhone(phone:string){
        cy.get("input[id='customer.phoneNumber']").type(phone);
    };
    fillSSN(SSN:string){
        cy.get("input[id='customer.ssn']").type(SSN);
    };
    fillUsername(userName:string){
        cy.get("input[id='customer.username']").type(userName);
    };
    fillPassword(password:string){
        cy.get("input[id='customer.password']").type(password);
    };
    fillRepeatPassword(rePassword:string){
        cy.get("input[id='repeatedPassword']").type(rePassword);
    };
    clickRegister(){
        cy.get("input[type='submit']").contains('Register').click();
    }
    confirmRegister(userName:string){
        cy.get('.title').should('have.text',`Welcome ${userName}`);
    }
    
}