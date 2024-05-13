export class Forgot {
    goToForgotLogin() {
        cy.get('#loginPanel').find('a').contains('Forgot login info?').click();
    }
    fillFirstName(firstName: string) {
        cy.get("input[id='firstName']").type(firstName);
    };
    fillLastName(lastName: string) {
        cy.get("input[id='lastName']").type(lastName);

    };
    fillAddress(address: string) {
        cy.get("input[id='address.street']").type(address);
    };
    fillCity(city: string) {
        cy.get("input[id='address.city']").type(city);
    };
    fillState(state: string) {
        cy.get("input[id='address.state']").type(state);
    };
    fillZipCode(zipCode: string) {
        cy.get("input[id='address.zipCode']").type(zipCode);
    };
    fillSSN(SSN: string) {
        cy.get("input[id='ssn']").type(SSN);
    };
    clickFindLogin() {
        cy.get("input[type='submit']").contains('Find My Login Info').click();
    }
    checkLogin(fullName: string) {
        cy.get(".smallText").invoke('text').then((text) => {
            expect(text.trim()).equal(`Welcome${fullName}`)
        });
    }
    checkCredentials(userName:string, password:string){
        
    }
}