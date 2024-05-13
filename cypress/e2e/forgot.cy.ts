/// <reference types="cypress" />
import {Forgot} from "../pages/forgot";
const csv = require('neat-csv')

let forgotData:any
describe('Forgot Login',()=>{
    before(() => {
        //Reading data from csv
        cy.fixture("forgot.csv")
            .then(csv)
            .then((data) => {
                forgotData = data
            })
    })
    it("Find login info",()=>{
        for (let i = 0; i < forgotData.length; i++) {
        const forgot =new Forgot()
        cy.visit("/parabank/index.htm");
        forgot.goToForgotLogin();
        forgot.fillFirstName(forgotData[i]['firstName']);//Accessing first name from CSV
        forgot.fillLastName(forgotData[i]['lastName']);
        forgot.fillAddress(forgotData[i]['address']);
        forgot.fillCity(forgotData[i]['city']);
        forgot.fillState(forgotData[i]['state']);
        forgot.fillZipCode(forgotData[i]['zipCode']);
        forgot.fillSSN(forgotData[i]['SSN']);
        forgot.clickFindLogin();
        forgot.checkLogin(forgotData[i]['fullName']);
        // forgot.checkCredentials();
        }
    })
})