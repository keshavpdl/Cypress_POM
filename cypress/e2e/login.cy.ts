import {Login} from "../pages/login";
const csv = require('neat-csv')

let loginData:any

describe('Login',()=>{
    before(() => {
        cy.fixture("login.csv")
            .then(csv)
            .then((data) => {
                loginData = data
            })
    })
    it("Login with valid username & valid password",()=>{
        const login =new Login()
        cy.visit(" https://parabank.parasoft.com/parabank/index.htm");
        login.fillUsername(loginData[0]['userName']);
        login.fillPassword(loginData[0]['password'])
        login.clickLogin();
        login.checkLoginSuccess(loginData[0]['fullName'])
    })
    it("Login with valid username & invalid password",()=>{
        const login =new Login()
        cy.visit(" https://parabank.parasoft.com/parabank/index.htm");
        login.fillUsername(loginData[1]['userName']);
        login.fillPassword(loginData[1]['password'])
        login.clickLogin();
        login.checkLoginFailure();
    })
    it("Login with invalid username & valid password",()=>{
        const login =new Login()
        cy.visit(" https://parabank.parasoft.com/parabank/index.htm");
        login.fillUsername(loginData[2]['userName']);
        login.fillPassword(loginData[2]['password'])
        login.clickLogin();
        login.checkLoginFailure();
    })
    it("Login with invalid username & invalid password",()=>{
        const login =new Login()
        cy.visit(" https://parabank.parasoft.com/parabank/index.htm");
        login.fillUsername(loginData[3]['userName']);
        login.fillPassword(loginData[3]['password'])
        login.clickLogin();
        login.checkLoginFailure();
    })

})