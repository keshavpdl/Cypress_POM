/// <reference types="cypress" />
import {Forgot} from "../pages/forgot";
const csv = require('neat-csv')

let forgotData:any
describe('Forgot Login',()=>{
    before(() => {
        cy.fixture("forgot.csv")
            .then(csv)
            .then((data) => {
                forgotData = data
            })
    })
    it("Should Find The Login Info",()=>{
        for (let i = 0; i < forgotData.length; i++) {
        const forgot =new Forgot()
        cy.visit(" https://parabank.parasoft.com/parabank/index.htm");
        forgot.goToForgotLogin();
        forgot.fillFirstName(forgotData[i]['firstName']);
        forgot.fillLastName(forgotData[i]['lastName']);
        forgot.fillAddress(forgotData[i]['address']);
        forgot.fillCity(forgotData[i]['city']);
        forgot.fillState(forgotData[i]['state']);
        forgot.fillZipCode(forgotData[i]['zipCode']);
        forgot.fillSSN(forgotData[i]['SSN']);
        forgot.clickFindLogin();
        }
    })
})