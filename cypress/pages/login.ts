
export class Login{
    fillUsername(username:string){
        cy.get("input[name='username']").type(username);
    }
    fillPassword(password:string){
        cy.get("input[name='password']").type(password);
    }
    clickLogin(){
        cy.get("input[type='submit']").contains('Log In').click();
    }
    checkLoginSuccess(fullName:string){
        cy.get(".smallText").invoke('text').then((text) => {
            expect(text.trim()).equal(`Welcome${fullName}`)
        });
        cy.get('#accountTable').should('be.visible');
    }
    checkLoginFailure(){
        cy.get('.error').should('have.text','The username and password could not be verified.')
    }

}