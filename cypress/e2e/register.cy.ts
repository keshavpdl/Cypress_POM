/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import {Register} from "../pages/register";

describe('Register',()=>{
    let register= new Register();
    before('Visit Register',()=>{
        cy.visit("/parabank/index.htm");
        register.goToRegister();
    })

    it("Register new user with all details",()=>{
        const details={
            firstName:faker.person.firstName(),
            lastName:faker.person.lastName(),
            address:faker.person.jobArea(),
            city:faker.location.city(),
            state:faker.location.state(),
            zipCode:faker.location.zipCode(),
            phoneNumber:faker.phone.number(),
            password:faker.internet.password(),
            userName:faker.internet.userName(),
        }
        register.fillFirstName(details.firstName);
        register.fillLastName(details.lastName);
        register.fillAddress(details.address);
        register.fillCity(details.city);
        register.fillState(details.state);
        register.fillZipCode(details.zipCode);
        register.fillPhone(details.phoneNumber);
        register.fillSSN('12345');
        register.fillUsername(details.userName);
        register.fillPassword(details.password);
        register.fillRepeatPassword(details.password);
        register.clickRegister();
        register.confirmRegister(details.userName)
    })
})